import {RouteObject, useRoutes} from "react-router-dom";
import { ProviderCatalogPage } from "./pages/ProviderCatalogPage";
import { MainPage } from "./pages/MainPage";
import { ProviderServicePage } from "./pages/ProviderServicePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { UserAccountPage } from "./pages/UserAccountPage";
import { ConnectionRequestPage } from "./pages/ConnectionRequestPage";
import { ConnectionRequestsListPage } from "./pages/ConnectionRequestsListPage";


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
            path: "provider-duties/:providerServiceId",
            element: <ProviderServicePage />,
        },
        {
            path: "/login",
            element: <LoginPage />,
        },
        {
            path: "/register",
            element: <RegisterPage />,
        },
        {
            path: "/user-account",
            element: <UserAccountPage />,
        },
        {
            path: "/connection-request/:connectionRequestId",
            element: <ConnectionRequestPage />,
        },
        {
            path: "/connection-requests-list",
            element: <ConnectionRequestsListPage />,
        },
    ];
    const routeResult = useRoutes(routes);
    return <>{routeResult}</>;
};