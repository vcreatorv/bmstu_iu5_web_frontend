import {RouteObject, useRoutes} from "react-router-dom";
import { PrivatePages } from "./PrivatePages";
import { ProviderCatalogPage } from "./pages/ProviderCatalogPage";
import { MainPage } from "./pages/MainPage";
import { ProviderServicePage } from "./pages/ProviderServicePage";


export const AppRoutes = () => {
    const routes: RouteObject[] = [
        {
            path: "/",
            element: <PrivatePages/>,
            children: [
                {
                    path: "",
                    element: <MainPage />,
                },
                {
                    path: "duties",
                    element: <ProviderCatalogPage />,
                },
                {
                    path: "duties/:id",
                    element: <ProviderServicePage />,
                }
            ],
        },
    ];
    const routeResult = useRoutes(routes);
    return <>{routeResult}</>;
};