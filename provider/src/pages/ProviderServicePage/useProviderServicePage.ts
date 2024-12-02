// import { useEffect, useState } from "react";
// import { ProviderServiceList as PROVIDER_SERVICE_LIST_MOCK } from "../../core/mock/providerServicesList";
// import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
// import { api } from "../../core/api";
// import { useNavigate, useParams } from "react-router-dom";
// import { ProviderDuty } from "../../core/api/API";
// import { addToConnectionRequest, initializeConnectionRequest } from "../../core/store/slices/connectionRequestSlice";
// import { incrementServicesInConnectionRequest, setConnectionRequestData } from "../../core/store/slices/appSlice";


// export const useProviderServicePage = () => {
//     const dispatch = useAppDispatch();
//     const navigate = useNavigate();
//     const { providerServiceId } = useParams<{ providerServiceId: string }>();
//     const [providerService, setProviderService] = useState<ProviderDuty | null>(null);
//     const {id, services} = useAppSelector((state) => state.cart);

//     const fetchProviderService = async () => {
//         if (providerServiceId) {
//             api.getProviderDutyById(Number(providerServiceId))
//                 .then((response) => {
//                     setProviderService(response.data);
//                 })
//                 .catch(() => {
//                     const providerServiceMock = PROVIDER_SERVICE_LIST_MOCK.find(
//                         (service) => service.id === Number(providerServiceId)
//                     );
//                     setProviderService(providerServiceMock || null);
//                 });
//         }
//     };

//     const renderPrice = () => {
//         if (providerService) {
//             if (providerService.monthlyPayment) {
//                 return `от ${providerService.price} ₽/мес`;
//             } 
//             else {
//                 return `от ${providerService.price} ₽ за ${providerService.unit}`;
//             }
//         }
//     };

//     const handleAddToConnectionRequest = async () => {
//         if (services.find(service => service.id === providerServiceId)) {
//           console.log("Услуга уже добавлена в заявку");
//           return;
//         }
        
//         try {
//           const response = await api.addProviderDutyToRequest(Number(providerServiceId));
          
//           if (response.data) {
//             if (id === 0) {
//                 dispatch(initializeConnectionRequest({
//                   id: response.data.id,
//                   providerServiceList: [],
//                   consumer: '',
//                   phoneNumber: ''
//                 }));
//                 dispatch(setConnectionRequestData({connectionRequestId: response.data.id!}))
//             }
//             dispatch(addToConnectionRequest(
//             {
//                 id: providerService?.id,
//                 title: providerService?.title,
//                 price: providerService?.price,
//                 monthlyPayment: providerService?.monthlyPayment,
//                 unit: providerService?.unit,
//                 amountDescription: providerService?.amountDescription,
//                 imgUrl: providerService!.imgUrl,
//                 amount: 1,
//             }
//             ));
//             dispatch(incrementServicesInConnectionRequest());
//             navigate("/connection-request/" + response.data.id);
//           }
//         } 
//         catch (error) {
//           console.error('Ошибка добавления услуги в заявку:', error);
//         }
//     };

//     useEffect(() => {
//         fetchProviderService();
//     }, [providerServiceId]);

//     return {
//         renderPrice,
//         providerService,
//         handleAddToConnectionRequest,
//     };
// };

import { useEffect, useState } from "react";
import { ProviderServiceList as PROVIDER_SERVICE_LIST_MOCK } from "../../core/mock/providerServicesList";
import { api } from "../../core/api";
import { useNavigate, useParams } from "react-router-dom";
import { ProviderDuty } from "../../core/api/API";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { incrementServicesInConnectionRequest } from "../../core/store/slices/appSlice";

export const useProviderServicePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { providerServiceId } = useParams<{ providerServiceId: string }>();
  const [providerService, setProviderService] = useState<ProviderDuty | null>(null);
  const { isAuth } = useAppSelector((state) => state.user);

  const fetchProviderService = async () => {
    if (providerServiceId) {
      try {
        const response = await api.getProviderDutyById(Number(providerServiceId));
        setProviderService(response.data);
      } 
      catch {
        const providerServiceMock = PROVIDER_SERVICE_LIST_MOCK.find(
          (service) => service.id === Number(providerServiceId)
        );
        setProviderService(providerServiceMock || null);
      }
    }
  };

  const renderPrice = () => {
    if (providerService) {
      if (providerService.monthlyPayment) {
        return `от ${providerService.price} ₽/мес`;
      } 
      else {
        return `от ${providerService.price} ₽ за ${providerService.unit}`;
      }
    }
  };

  const handleAddToConnectionRequest = async () => {
    if (!isAuth) {
      console.log("Пользователь не авторизован. Пожалуйста, выполните вход.");
      alert("Вы должны авторизоваться, чтобы добавить услугу в заявку.");
      navigate("/login");
      return;
    }

    try {
      const response = await api.addProviderDutyToRequest(Number(providerServiceId));
      if (response.data) {
        console.log("Услуга успешно добавлена в заявку");
        dispatch(incrementServicesInConnectionRequest());
        navigate(`/connection-requests/${response.data.id}`);
      }
    } 
    catch (error) {
      console.error("Ошибка добавления услуги в заявку:", error);
    }
  };

  useEffect(() => {
    fetchProviderService();
  }, [providerServiceId]);

  return {
    renderPrice,
    providerService,
    handleAddToConnectionRequest,
  };
};
