import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../core/store/hooks';
import { 
  initializeConnectionRequest,
  updateConnectionRequestService, 
  removeFromConnectionRequest, 
  updateConsumer,
  updatePhoneNumber,
  clearConnectionRequest 
} from "../../core/store/slices/cartSlice";
import { api } from '../../core/api';
import { clearAppState, decrementServicesInConnectionRequest } from '../../core/store/slices/appSlice';


export const useConnectionRequestPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { connectionRequestId } = useParams<{ connectionRequestId: string }>();
  const { services, totalPrice, consumer, phoneNumber } = useAppSelector((state) => state.cart);
  const [notification, setNotification] = useState<string | null>(null);


  useEffect(() => {
    if (connectionRequestId) {
      loadConnectionRequest();
    }
  }, [connectionRequestId]);


  const loadConnectionRequest = async () => {
    if (Number(connectionRequestId) === 0) {
      return;
    }
    try {
      const response = await api.getConnectionRequestById(Number(connectionRequestId));
      if (response.data) {
        dispatch(initializeConnectionRequest(response.data));
      }
    } 
    catch (error) {
      console.error('Ошибка при загрузке заявки:', error);
    }
  };

  // const handleAmountChange = (id: number, amount: number) => {
  //   dispatch(updateConnectionRequestItem({ id, amount }));
  // };

  const handleProviderServiceAmountChange = async (id: number, amount: number) => {
    try {
      await api.updateAmountInDutyRequest(id, Number(connectionRequestId), { amount });
      dispatch(updateConnectionRequestService({ id, amount }));
    } 
    catch (error) {
      console.error('Ошибка при обновлении количества', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await api.deleteProviderDutyFromConnectionRequest(id, Number(connectionRequestId));
      dispatch(removeFromConnectionRequest(id));
      dispatch(decrementServicesInConnectionRequest());
    } 
    catch (error) {
      console.error('Ошибка при удалении услуги из заявки:', error);
    }
  };

  const handleFormConnectionRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (services.length === 0) {
      setNotification('Заявка не может быть пустой. Добавьте хотя бы одну услугу.');
      return;
    }
    try {
      const response = await api.formConnectionRequest(Number(connectionRequestId));
      if (response.status === 200) {
        dispatch(clearConnectionRequest());
        dispatch(clearAppState());
        navigate('/provider-duties');
      }
    } 
    catch (error) {
      console.error('Ошибка при отправке заявки:', error);
    }
  };

  const handleClearConnectionRequest = async () => {
    try {
      await api.deleteConnectionRequest(Number(connectionRequestId));
      dispatch(clearConnectionRequest());
      dispatch(clearAppState());
      navigate('/provider-duties');
    } 
    catch (error) {
      console.error('Ошибка при удалении заявки:', error);
    }
  };

  const handleConsumerChange = async (value: string) => {
    try {
      await api.updateConnectionRequest(Number(connectionRequestId), { 
        consumer: value, 
        phoneNumber: phoneNumber 
      });
      dispatch(updateConsumer(value));
    } 
    catch (error) {
      console.error('Ошибка при обновлении данных заказчика:', error);
      // откат изменений
      // await loadConnectionRequest();
    }
  };

  const handlePhoneNumberChange = async (value: string) => {
    try {
      await api.updateConnectionRequest(Number(connectionRequestId), { 
        consumer: consumer, 
        phoneNumber: value 
      });
      dispatch(updatePhoneNumber(value));
    } 
    catch (error) {
      console.error('Ошибка при обновлении номера телефона:', error);
      // откат изменений
      // await loadConnectionRequest();
    }
  };

  return {
    services,
    totalPrice,
    consumer,
    phoneNumber,
    notification,
    handleProviderServiceAmountChange,
    handleDelete,
    handleFormConnectionRequest,
    handleClearConnectionRequest,
    handleConsumerChange,
    handlePhoneNumberChange
  };
};



