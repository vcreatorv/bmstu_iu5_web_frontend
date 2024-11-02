import { useEffect, useState } from "react";
import { IProviderService } from "../../core/api/service/typing";
import { getProviderServiceList } from "../../core/api/service";
import { ProviderServiceList as  PROVIDER_SERVICE_LIST_MOCK } from "../../core/mock/porivderServicesList";
import { ChangeEvent } from "../../App.typing";
import { connectionRequest } from "../../core/mock/connectionRequest";

export const useProviderCatalogPage = () => {
    const [providerServiceList, setProviderServiceList] = useState<IProviderService[]>([]);
    const [connectionRequestId, setConnectionRequestId] = useState<number>();
    const [itemsInCart, setItemsInCart] = useState<number>(0);
    const [searchProviderServiceTitle, setSearchProviderServiceTitle] = useState("");

    const handleSearchProviderServiceClick = () => {
        getProviderServiceList(searchProviderServiceTitle)
            .then((data) => {
                setProviderServiceList(data.providerServiceList);
            })
            .catch(() => {
                const filteredProviderService = PROVIDER_SERVICE_LIST_MOCK.filter((providerService) =>
                    providerService.title.toLowerCase().startsWith(searchProviderServiceTitle.toLowerCase())
                );
                setProviderServiceList(filteredProviderService);
            });
    };

    const handleSearchTitleChange = (e: ChangeEvent) => {
        setSearchProviderServiceTitle(e.target.value);
    };

    useEffect(() => {
        getProviderServiceList()
            .then((data) => {
                setProviderServiceList(data.providerServiceList);
                setConnectionRequestId(data.connectionRequestId)
                setItemsInCart(data.itemsInCart)
            })
            .catch(() => {
                setProviderServiceList(PROVIDER_SERVICE_LIST_MOCK)
                setConnectionRequestId(0)
                setItemsInCart(0)
            });
    }, []);

    return {
        providerServiceList,
        connectionRequestId,
        itemsInCart,
        handleSearchProviderServiceClick,
        handleSearchTitleChange,
    };
};