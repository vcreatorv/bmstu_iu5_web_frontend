import { sendRequest } from "../index.ts";
import { IConnectionRequestByIdResponse, IGetProviderServiceListResponse, IProviderService } from "./typing";

export const getProviderServiceList = async (searchTitle?: string) => {
    try {
        const response: IGetProviderServiceListResponse = await sendRequest({
            method: "GET",
            path: "/provider-duties",
            params: searchTitle ? {title: searchTitle} : undefined,
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