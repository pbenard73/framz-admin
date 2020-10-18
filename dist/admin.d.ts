export const AdminModule: typeof MyAdminModule;
export const AdminWrapper: () => JSX.Element;
export const Admin: typeof baseAdmin;
export const generateAdmin: (App: any) => () => JSX.Element;
declare class MyAdminModule {
    name: string;
    routers: any[][];
    initializers: {
        init: () => void;
    };
}
import baseAdmin from "./front/Admin";
export {};
