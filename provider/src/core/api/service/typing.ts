export interface IProviderService {
    id: number;
    title: string;
    description: string;
    monthly_payment: boolean;
    active: boolean;
    price: number;
    unit: string;
    amount_description: string;
    img_url: string; 
}

export interface IGetProviderServiceListResponse {
    provider_services: IProviderService[];
    connection_request_id: number;
    items_in_cart: number;
}

export interface IProviderServiceDataInRequestItem {
    id: number;
    title: string;
    price: number;
    monthly_payment: boolean;
    unit: string;
    amount_description: string;
    img_url: string; 
}

export interface IProviderServiceInRequestItem {
    provider_service: IProviderServiceDataInRequestItem;
    amount: number;
}

export interface IConnectionRequestByIdResponse {
    id: number;
    consumer: string;
    phone_number: string;
    creation_datetime: string;
    formation_datetime: string;
    completion_datetime: string;
    client: number;
    manager: number;
    total_price: number;
    status: string;
    provider_service_list: IProviderServiceInRequestItem[];
}