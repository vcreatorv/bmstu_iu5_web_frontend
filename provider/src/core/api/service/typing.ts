export interface IProviderService {
    id: number;
    title: string;
    description: string;
    monthlyPayment: boolean;
    active: boolean;
    price: number;
    unit: string;
    amountDescription: string;
    imgUrl: string; 
}

export interface IGetProviderServiceListResponse {
    providerServiceList: IProviderService[];
    connectionRequestId: number;
    itemsInCart: number;
}

// export interface IProviderServiceDataInRequestItem {
//     id: number;
//     title: string;
//     price: number;
//     monthlyPayment: boolean;
//     unit: string;
//     amountDescription: string;
//     imgUrl: string; 
// }

export interface IProviderServiceInRequestItem {
    // provider_service: IProviderServiceDataInRequestItem;
    id: number;
    title: string;
    price: number;
    monthlyPayment: boolean;
    unit: string;
    amountDescription: string;
    imgUrl: string;
    amount: number;
}

export interface IConnectionRequestByIdResponse {
    id: number;
    consumer: string;
    phoneNumber: string;
    creationDatetime: string;
    formationDatetime: string;
    completionDatetime: string;
    client: number;
    manager: number;
    totalPrice: number;
    status: string;
    providerServiceList: IProviderServiceInRequestItem[];
}