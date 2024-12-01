import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../core/store/hooks';
import { 
  updateConsumer,
  updatePhoneNumber,
  clearConnectionRequest, 
  loadConnectionRequest,
  updateProviderServiceAmount,
  deleteProviderDuty,
  submitConnectionRequest,
  deleteConnectionRequest
} from "../../core/store/slices/cartSlice";
import { clearAppState, decrementServicesInConnectionRequest } from '../../core/store/slices/appSlice';


export const useConnectionRequestPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { connectionRequestId } = useParams<{ connectionRequestId: string }>();
  const { services, totalPrice, consumer, phoneNumber } = useAppSelector((state) => state.cart);
  const [notification, setNotification] = useState<string | null>(null);


  useEffect(() => {
    if (connectionRequestId) {
      dispatch(loadConnectionRequest(Number(connectionRequestId)));
    }
  }, [connectionRequestId, dispatch]);

  const handleProviderServiceAmountChange = (id: number, amount: number) => {
    dispatch(updateProviderServiceAmount({ id, amount, connectionRequestId: Number(connectionRequestId) }))
      .then(() => {
        console.log('Количество успешно обновлено');
      })
      .catch(() => {
        console.error('Ошибка при обновлении количества');
      });
  };

  const handleDelete = (id: number) => {
    dispatch(deleteProviderDuty({ id, connectionRequestId: Number(connectionRequestId) }))
      .then(() => {
        dispatch(decrementServicesInConnectionRequest());
        console.log('Услуга успешно удалена из заявки');
      })
      .catch(() => {
        console.error('Ошибка при удалении услуги из заявки');
      });
  };
  
  const handleFormConnectionRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (services.length === 0) {
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
    if (services.length < 1) {
      navigate('/provider-duties');
      return;
    }
    dispatch(deleteConnectionRequest(Number(connectionRequestId)))
      .then(() => {
        dispatch(clearAppState());
        navigate('/provider-duties');
      })
      .catch(() => {
        console.error('Ошибка при удалении заявки');
      });
  };

  const handleConsumerChange = async (value: string) => {
    dispatch(updateConsumer(value));
  };

  const handlePhoneNumberChange = async (value: string) => {
    dispatch(updatePhoneNumber(value));
  };

  return {
    services,
    totalPrice,
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



