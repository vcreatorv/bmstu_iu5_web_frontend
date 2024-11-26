import { useEffect, useState } from "react";
import { IConnectionRequestsTableProps, IConnectionRequestsTableRow } from "../../components/ConnectionRequestsListTable/typing";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { setFilterConnectionRequestEndDate, setFilterConnectionRequestStartDate, setFilterConnectionRequestStatus } from "../../core/store/slices/appSlice";
import { ChangeEvent } from "../../App.typing";
import { api } from "../../core/api";
import { connectionRequestsList as CONNECTION_REQUESTS_LIST_MOCK } from "../../core/mock/connectionRequestsList";
import { IConnectionRequestsFilterProps } from "../../components/ConnectionRequestsListFilters/typing";
import { ConnectionRequestDTO } from "../../core/api/API";

export const useConnectionRequestsListPage = () => {
    const [tableProps, setTableProps] = useState<IConnectionRequestsTableProps>({rows: []});

    const {filterConnectionRequestStatus, filterConnectionRequestStartDate, filterConnectionRequestEndDate} = useAppSelector((state) => state.app);
    const dispatch = useAppDispatch();

    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setFilterConnectionRequestStatus(event.target.value))
    };

    const handleStartDateChange = (event: ChangeEvent) => {
        dispatch(setFilterConnectionRequestStartDate(event.target.value))
    };

    const handleEndDateChange = (event: ChangeEvent) => {
        dispatch(setFilterConnectionRequestEndDate(event.target.value))
    };

    const handleFilterClick = () => {
        api.getAllConnectionRequests(
            {
                status: mapStringToOptQueryParam(filterConnectionRequestStatus),
                startDate: mapStringToOptQueryParam(filterConnectionRequestStartDate),
                endDate: mapStringToOptQueryParam(filterConnectionRequestEndDate),
            })
            .then((response) => {
                setTableProps(mapBackendResultToTableData(response.data))
            })
            .catch(() => {
                setTableProps(
                    mapBackendResultToTableData(
                        filterDataOnFront(CONNECTION_REQUESTS_LIST_MOCK,
                            mapStringToOptQueryParam(filterConnectionRequestStatus),
                            mapStringToOptQueryParam(filterConnectionRequestStartDate),
                            mapStringToOptQueryParam(filterConnectionRequestEndDate))
                    )
                );
            })
    };

    useEffect(
        handleFilterClick,
    []);

    const filterProps: IConnectionRequestsFilterProps = {
        selectedStatus: filterConnectionRequestStatus,
        selectedStartDate: filterConnectionRequestStartDate,
        selectedEndDate: filterConnectionRequestEndDate,
        
        handleStatusChange: handleStatusChange,
        handleStartDateChange: handleStartDateChange,
        handleEndDateChange: handleEndDateChange,
        handleFilterClick: handleFilterClick,
    };


    return {
        tableProps, 
        filterProps,
    };
};

function mapStringToOptQueryParam(str?: string): string | undefined {
    if (str == "") {
        return undefined;
    }
    return str;
}

function mapStatusToTable(status?: string): string {
    switch (status) {
        case "FORMED":
            return "В обработке";
        case "COMPLETED":
            return "Завершена";
        case "REJECTED":
            return "Отклонена";
        default:
            return "Неизвестный";
    }
}

function convertDatetimeToDDMMYYYY(dateString: string | null | undefined): string {
    if (!dateString) return "";

    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
}

export function mapBackendResultToTableData(requests: ConnectionRequestDTO[]): IConnectionRequestsTableProps {
    const rows: IConnectionRequestsTableRow[] = requests.map((request) => {
        return {
            number: request.id || 0,
            status: mapStatusToTable(request.status),
            creationDate: convertDatetimeToDDMMYYYY(request.creationDatetime),
            formationDate: convertDatetimeToDDMMYYYY(request.formationDatetime),
            completionDate: convertDatetimeToDDMMYYYY(request.completionDatetime),
        };
    });

    return {rows};
}

export function filterDataOnFront(
    connectionRequestsList: ConnectionRequestDTO[],
    filterStatus?: string,
    filterStartDate?: string,
    filterEndDate?: string
): ConnectionRequestDTO[] {
    return connectionRequestsList.filter((row) => {
        let matchesStatus = true;
        let matchesStartDate = true;
        let matchesEndDate = true;

        if (filterStatus) {
            matchesStatus = row.status === filterStatus;
        }

        if (filterStartDate && row.formationDatetime) {
            matchesStartDate = new Date(row.formationDatetime) >= new Date(filterStartDate);
        }

        if (filterEndDate && row.formationDatetime) {
            matchesEndDate = new Date(row.formationDatetime) <= new Date(filterEndDate);
        }

        return matchesStatus && matchesStartDate && matchesEndDate;
    })
}