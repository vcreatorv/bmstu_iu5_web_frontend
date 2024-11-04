import {RouteObject, useRoutes} from "react-router-dom";
import { ProviderCatalogPage } from "./pages/ProviderCatalogPage";
import { MainPage } from "./pages/MainPage";
import { ProviderServicePage } from "./pages/ProviderServicePage";


export const AppRoutes = () => {
    const routes: RouteObject[] = [
        {
            path: "",
            element: <MainPage />,
        },
        {
            path: "provider-duties",
            element: <ProviderCatalogPage />,
        },
        {
            path: "provider-duties/:id",
            element: <ProviderServicePage />,
        },
    ];
    const routeResult = useRoutes(routes);
    return <>{routeResult}</>;
};