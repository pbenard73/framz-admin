declare var _default: AdminModule;
export default _default;
export const AdminWrapper: () => JSX.Element;
export const Admin: typeof baseAdmin;
declare class AdminModule {
    name: string;
    routers: any[][];
}
import baseAdmin from "./front/Admin";
