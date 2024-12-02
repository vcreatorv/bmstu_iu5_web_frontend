// import { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useAppSelector, useAppDispatch } from '../../core/store/hooks';
// import { 
//   updateConsumer,
//   updatePhoneNumber,
//   clearConnectionRequest, 
//   loadConnectionRequest,
//   updateProviderServiceAmount,
//   deleteProviderDuty,
//   submitConnectionRequest,
//   deleteConnectionRequest
// } from "../../core/store/slices/connectionRequestSlice";
// import { clearAppState, decrementServicesInConnectionRequest } from '../../core/store/slices/appSlice';


// export const useConnectionRequestPage = () => {
//   const navigate = useNavigate();
//   const dispatch = useAppDispatch();
//   const { connectionRequestId } = useParams<{ connectionRequestId: string }>();
//   const { services, totalPrice, consumer, phoneNumber } = useAppSelector((state) => state.cart);
//   const [notification, setNotification] = useState<string | null>(null);


//   useEffect(() => {
//     if (connectionRequestId) {
//       dispatch(loadConnectionRequest(Number(connectionRequestId)));
//     }
//   }, [connectionRequestId, dispatch]);

//   const handleProviderServiceAmountChange = (id: number, amount: number) => {
//     dispatch(updateProviderServiceAmount({ id, amount, connectionRequestId: Number(connectionRequestId) }))
//       .then(() => {
//         console.log('Количество успешно обновлено');
//       })
//       .catch(() => {
//         console.error('Ошибка при обновлении количества');
//       });
//   };

//   const handleDelete = (id: number) => {
//     dispatch(deleteProviderDuty({ id, connectionRequestId: Number(connectionRequestId) }))
//       .then(() => {
//         dispatch(decrementServicesInConnectionRequest());
//         console.log('Услуга успешно удалена из заявки');
//       })
//       .catch(() => {
//         console.error('Ошибка при удалении услуги из заявки');
//       });
//   };
  
//   const handleFormConnectionRequest = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (services.length === 0) {
//       setNotification('Заявка не может быть пустой. Добавьте хотя бы одну услугу.');
//       return;
//     }
//     dispatch(
//       submitConnectionRequest({
//         connectionRequestId: Number(connectionRequestId),
//         consumer,
//         phoneNumber,
//       })
//     )
//       .then(() => {
//         dispatch(clearConnectionRequest());
//         navigate('/provider-duties');
//       })
//       .catch(() => {
//         console.error('Ошибка при отправке заявки');
//       });
//   };

//   const handleClearConnectionRequest = () => {
//     if (services.length < 1) {
//       navigate('/provider-duties');
//       return;
//     }
//     dispatch(deleteConnectionRequest(Number(connectionRequestId)))
//       .then(() => {
//         dispatch(clearAppState());
//         navigate('/provider-duties');
//       })
//       .catch(() => {
//         console.error('Ошибка при удалении заявки');
//       });
//   };

//   const handleConsumerChange = async (value: string) => {
//     dispatch(updateConsumer(value));
//   };

//   const handlePhoneNumberChange = async (value: string) => {
//     dispatch(updatePhoneNumber(value));
//   };

//   return {
//     services,
//     totalPrice,
//     consumer,
//     phoneNumber,
//     notification,
//     connectionRequestId,
//     handleProviderServiceAmountChange,
//     handleDelete,
//     handleFormConnectionRequest,
//     handleClearConnectionRequest,
//     handleConsumerChange,
//     handlePhoneNumberChange
//   };
// };

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../core/store/hooks';
import { 
  updateConsumer,
  updatePhoneNumber,
  clearConnectionRequest,
  submitConnectionRequest,
  deleteConnectionRequest
} from "../../core/store/slices/connectionRequestSlice";
import { api } from '../../core/api';
import { ProviderDutyInRequestDTO } from '../../core/api/API';



export function calculateTotalPriceAndFormat(providerServiceList?: ProviderDutyInRequestDTO[]): { totalPrice: number; priceFormat: string } {
  console.log(providerServiceList);
  if (!providerServiceList || providerServiceList.length === 0) {
      return { totalPrice: 0, priceFormat: '₽' };
  }

  const totalPrice = providerServiceList.reduce((total, service) => {
      return total + (service.price || 0) * (service.amount || 1);
  }, 0);

  const allMonthlyPayments = providerServiceList.every(service => service.monthlyPayment);

  return {
      totalPrice,
      priceFormat: allMonthlyPayments ? "₽/мес" : "₽"
  };
}


export const useConnectionRequestPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { connectionRequestId } = useParams<{ connectionRequestId: string }>();
  const { consumer, phoneNumber } = useAppSelector((state) => state.connectionRequest);
  const [notification, setNotification] = useState<string | null>(null);
  const [providerServicesList, setProviderServicesList] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [priceFormat, setPriceFormat] = useState<string>("₽");

  useEffect(() => {
    if (connectionRequestId) {
      api.getConnectionRequestById(Number(connectionRequestId))
        .then((response) => {
          if (response.data) {
            setProviderServicesList(response.data.providerServiceList || []);
            const { totalPrice: calculatedTotalPrice, priceFormat: calculatedPriceFormat } = calculateTotalPriceAndFormat(response.data.providerServiceList || []);
            setTotalPrice(calculatedTotalPrice);
            setPriceFormat(calculatedPriceFormat);
          }
        })
        .catch(() => {
          console.error('Ошибка при загрузке заявки');
        });
    }
  }, [connectionRequestId]);

  // const calculateTotalPrice = (services: any[]) => {
  //   const price = services.reduce(
  //     (total, service) => total + (service.price || 0) * (service.amount || 1),
  //     0
  //   );
  //   setTotalPrice(price);
  // };

  const handleProviderServiceAmountChange = (id: number, amount: number) => {
    api.updateAmountInDutyRequest(id, Number(connectionRequestId), { amount })
      .then(() => {
        setProviderServicesList((prevServices) =>
          prevServices.map((service) =>
            service.id === id ? { ...service, amount } : service
          )
        );
        const { totalPrice: calculatedTotalPrice, priceFormat: calculatedPriceFormat } = calculateTotalPriceAndFormat(
          providerServicesList.map((service) =>
            service.id === id ? { ...service, amount } : service
          )
        );
        setTotalPrice(calculatedTotalPrice);
        setPriceFormat(calculatedPriceFormat);
      })
      .catch(() => {
        console.error('Ошибка при обновлении количества');
      });
  };

  const handleDelete = (id: number) => {
    api.deleteProviderDutyFromConnectionRequest(id, Number(connectionRequestId))
      .then(() => {
        const updatedServicesList = providerServicesList.filter((service) => service.id !== id);
        setProviderServicesList(updatedServicesList);
        const { totalPrice: calculatedTotalPrice, priceFormat: calculatedPriceFormat } = calculateTotalPriceAndFormat(updatedServicesList);
        setTotalPrice(calculatedTotalPrice);
        setPriceFormat(calculatedPriceFormat);
        console.log('Услуга успешно удалена из заявки');
      })
      .catch(() => {
        console.error('Ошибка при удалении услуги из заявки');
      });
  };

  const handleFormConnectionRequest = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (providerServicesList.length === 0) {
      setNotification('Заявка не может быть пустой. Добавьте хотя бы одну услугу.');
      return;
    }

    dispatch(
      submitConnectionRequest({
        connectionRequestId: Number(connectionRequestId),
        consumer,
        phoneNumber,
      })
    )
      .then(() => {
        dispatch(clearConnectionRequest());
        navigate('/provider-duties');
      })
      .catch(() => {
        console.error('Ошибка при отправке заявки');
      });
  };

  const handleClearConnectionRequest = () => {
    if (providerServicesList.length < 1) {
      navigate('/provider-duties');
      return;
    }
    dispatch(deleteConnectionRequest(Number(connectionRequestId)))
      .then(() => {
        dispatch(clearConnectionRequest());
        navigate('/provider-duties');
      })
      .catch(() => {
        console.error('Ошибка при удалении заявки');
      });
  };

  const handleConsumerChange = (value: string) => {
    dispatch(updateConsumer(value));
  };

  const handlePhoneNumberChange = (value: string) => {
    dispatch(updatePhoneNumber(value));
  };

  return {
    providerServicesList,
    totalPrice,
    priceFormat,
    consumer,
    phoneNumber,
    notification,
    connectionRequestId,
    handleProviderServiceAmountChange,
    handleDelete,
    handleFormConnectionRequest,
    handleClearConnectionRequest,
    handleConsumerChange,
    handlePhoneNumberChange
  };
};




