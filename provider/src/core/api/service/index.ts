import { sendRequest } from "../index.ts";
import { IConnectionRequestByIdResponse, IGetProviderServiceListResponse, IProviderService } from "./typing";

export const getProviderServiceList = async (searchTitle?: string, monthlyPayment?: boolean | null) => {
    try {
        const params: Record<string, string> = {};
        if (searchTitle !== undefined) params.title = searchTitle;
        if (monthlyPayment !== undefined) params.monthlyPayment = String(monthlyPayment);

        const response: IGetProviderServiceListResponse = await sendRequest({
            method: "GET",
            path: "/provider-duties",
            params,
        });
        return response;
    } catch (error) {
        console.error("Error fetching provider services list:", error);
        throw error;
    }
};

export const getProviderServiceById = async (id: string) => {
    try {
        const response: IProviderService = await sendRequest({
            method: "GET",
            path: `/provider-duties/${id}`,
        });
        return response;
    } catch (error) {
        console.error("Error fetching provider service by id:", error);
        throw error;
    }
};

export const getConnectionRequestById = async (id: string) => {
    try {
        const response: IConnectionRequestByIdResponse = await sendRequest({
            method: "GET",
            path: `/connection-requests/${id}`,
        });
        return response;
    } catch (error) {
        console.error("Error fetching connection request by id:", error);
        throw error;
    }
};