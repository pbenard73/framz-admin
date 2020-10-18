export const AdminModule: typeof MyAdminModule;
export const AdminWrapper: () => JSX.Element;
export const Admin: typeof baseAdmin;
export const generateAdmin: (App: any) => () => JSX.Element;
declare class MyAdminModule {
    name: string;
    routers: any[][];
    publicPaths: string[];
    initializers: {
        init: () => void;
        renderAdmin: typeof renderAdmin;
    };
}
import baseAdmin from "./front/Admin";
import renderAdmin from "./initializers/renderAdmin";
export {};
