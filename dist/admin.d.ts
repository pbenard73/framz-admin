export const AdminModule: typeof MyAdminModule;
export const AdminWrapper: () => JSX.Element;
export const Admin: typeof baseAdmin;
declare class MyAdminModule {
    name: string;
    routers: any[][];
}
import baseAdmin from "./front/Admin";
export {};
