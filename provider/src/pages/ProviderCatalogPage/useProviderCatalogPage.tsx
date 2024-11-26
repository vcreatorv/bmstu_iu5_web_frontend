import { useEffect, useState } from "react";
import { IProviderService } from "../../core/api/service/typing";
import { ProviderServiceList as PROVIDER_SERVICE_LIST_MOCK } from "../../core/mock/providerServicesList";
import { ChangeEvent } from "../../App.typing";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { api } from "../../core/api";
import { setConnectionRequestData, setSearchTitle, setTariffType } from "../../core/store/slices/appSlice";


export const useProviderCatalogPage = () => {
    const dispatch = useAppDispatch();
    const { searchTitle, tariffType, connectionRequestId, itemsInCart } = useAppSelector((state) => state.app);
    const { accessToken } = useAppSelector((state) => state.user);
    const [providerServiceList, setProviderServiceList] = useState<IProviderService[]>([]);

    const fetchProviderServices = async (title?: string, monthlyPayment?: boolean | null) => {
        try {
            const response = await api.getAllProviderDuties({
                title,
                monthlyPayment: monthlyPayment === null ? undefined : monthlyPayment
            });
            
            if (response.data && typeof response.data === 'object') {
                const data = response.data as Record<string, any>;
                setProviderServiceList(data.providerServiceList || []);
                dispatch(setConnectionRequestData({connectionRequestId: data.connectionRequestId || connectionRequestId, itemsInCart: data.itemsInCart || itemsInCart}));
            }
        } 
        catch (error) {          
            console.error("Ошибка получения списка услуг с бэкенда:", error);
            let filteredProviderService = PROVIDER_SERVICE_LIST_MOCK;
            if (title && title !== undefined) {
                filteredProviderService = filteredProviderService.filter((providerService) =>
                    providerService.title.toLowerCase().includes(title.toLowerCase())
                );
            }
            if (monthlyPayment !== null && monthlyPayment !== undefined) {
                filteredProviderService = filteredProviderService.filter((providerService) =>
                    providerService.monthlyPayment === monthlyPayment
                );
            }
            setProviderServiceList(filteredProviderService);
            dispatch(setConnectionRequestData({connectionRequestId: 0, itemsInCart: 0}));
        }
    };


    const handleSearchProviderServiceClick = () => {
        fetchProviderServices(searchTitle, tariffType);
    };

    const handleSearchTitleChange = (e: ChangeEvent) => {
        dispatch(setSearchTitle(e.target.value));
    };

    const handleTariffTypeChange = (eventKey: string | null) => {
        const newTariffType = eventKey === "all" ? null : eventKey === "true";
        dispatch(setTariffType(newTariffType));
        fetchProviderServices(searchTitle, newTariffType);
    };

    useEffect(() => {
        fetchProviderServices(searchTitle, tariffType);
    }, [accessToken, searchTitle, tariffType]);

    return {
        providerServiceList,
        connectionRequestId,
        itemsInCart,
        handleSearchProviderServiceClick,
        handleSearchTitleChange,
        handleTariffTypeChange,
        searchTitle,
        tariffType,
    };
};