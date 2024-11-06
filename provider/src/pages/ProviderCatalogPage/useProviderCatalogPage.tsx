import { useCallback, useEffect, useState } from "react";
import { IProviderService } from "../../core/api/service/typing";
import { getProviderServiceList } from "../../core/api/service";
import { ProviderServiceList as  PROVIDER_SERVICE_LIST_MOCK } from "../../core/mock/porivderServicesList";
import { ChangeEvent } from "../../App.typing";


export const useProviderCatalogPage = () => {
    const [providerServiceList, setProviderServiceList] = useState<IProviderService[]>([]);
    const [connectionRequestId, setConnectionRequestId] = useState<number>(0);
    const [itemsInCart, setItemsInCart] = useState<number>(0);
    const [searchProviderServiceTitle, setSearchProviderServiceTitle] = useState("");
    const [tariffType, setTariffType] = useState<boolean | null>(null);

    const fetchProviderServices = (title?: string, monthlyPayment?: boolean | null) => {
        getProviderServiceList(title, monthlyPayment)
            .then((data) => {
                setProviderServiceList(data.providerServiceList);
                setConnectionRequestId(data.connectionRequestId);
                setItemsInCart(data.itemsInCart);
            })
            .catch(() => {
                let filteredProviderService = PROVIDER_SERVICE_LIST_MOCK;
                if (title) {
                    filteredProviderService = filteredProviderService.filter((providerService) =>
                        providerService.title.toLowerCase().includes(title.toLowerCase())
                    );
                }
                if (monthlyPayment !== null) {
                    filteredProviderService = filteredProviderService.filter((providerService) =>
                        providerService.monthlyPayment === monthlyPayment
                    );
                }
                setProviderServiceList(filteredProviderService);
                setConnectionRequestId(0);
                setItemsInCart(0);
            });
    };

    const handleSearchProviderServiceClick = () => {
        fetchProviderServices(searchProviderServiceTitle, tariffType);
    };

    const handleSearchTitleChange = (e: ChangeEvent) => {
        setSearchProviderServiceTitle(e.target.value);
    };

    const handleTariffTypeChange = (eventKey: string | null) => {
        const newTariffType = eventKey === "all" ? null : eventKey === "true";
        setTariffType(newTariffType);
        fetchProviderServices(searchProviderServiceTitle, newTariffType);
    };

    useEffect(() => {
        fetchProviderServices();
    }, []);

    return {
        providerServiceList,
        connectionRequestId,
        itemsInCart,
        handleSearchProviderServiceClick,
        handleSearchTitleChange,
        handleTariffTypeChange,
        tariffType,
    };
};
