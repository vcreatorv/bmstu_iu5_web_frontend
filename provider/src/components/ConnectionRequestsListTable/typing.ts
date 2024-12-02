export interface IConnectionRequestsTableProps {
    rows: IConnectionRequestsTableRow[];
}

export interface IConnectionRequestsTableRow {
    number: number;
    status: string;
    creationDate: string;
    formationDate: string;
    completionDate: string;
    totalPrice: string;
    consumer: string;
    phoneNumber: string;
}