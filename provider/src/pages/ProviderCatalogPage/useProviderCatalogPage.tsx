import { useEffect } from "react";
import { ChangeEvent } from "../../App.typing";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { fetchProviderServices, setSearchTitle, setTariffType } from "../../core/store/slices/appSlice";


export const useProviderCatalogPage = () => {
    const dispatch = useAppDispatch();
    const { providerServiceList, connectionRequestId, itemsInCart, searchTitle, tariffType, isActive } = useAppSelector((state) => state.app);
    const { accessToken } = useAppSelector((state) => state.user);

    const handleSearchProviderServiceClick = () => {
        dispatch(fetchProviderServices({ title: searchTitle, monthlyPayment: tariffType }));
      };
    
      const handleSearchTitleChange = (e: ChangeEvent) => {
        dispatch(setSearchTitle(e.target.value));
      };
    
      const handleTariffTypeChange = (eventKey: string | null) => {
        const newTariffType = eventKey === "all" ? null : eventKey === "true";
        dispatch(setTariffType(newTariffType));
        dispatch(fetchProviderServices({ title: searchTitle, monthlyPayment: newTariffType }));
      };
    
      useEffect(() => {
        dispatch(fetchProviderServices({ title: searchTitle, monthlyPayment: tariffType }));
      }, [dispatch, searchTitle, tariffType, accessToken]);

    return {
        providerServiceList,
        connectionRequestId,
        itemsInCart,
        handleSearchProviderServiceClick,
        handleSearchTitleChange,
        handleTariffTypeChange,
        searchTitle,
        tariffType,
        isActive,
    };
};