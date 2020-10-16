import { Module } from "framz"

import crud from "./routers/crud"

import AdminWrapper from "./front/AdminWrapper"
import Admin from "./front/Admin"

class AdminModule extends Module {
    name = "admin"
    routers = [["/api", crud]]
}

export default AdminModule

export const AdminWrapper = baseAdminWrapper

export const Admin = baseAdmin
