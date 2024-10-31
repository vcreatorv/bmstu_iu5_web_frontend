import { FC } from "react";
import { Outlet } from "react-router-dom";
import { IPrivatePagesProps } from "./typing";
export const PrivatePages: FC<IPrivatePagesProps> = () => {
    return <Outlet />;
};