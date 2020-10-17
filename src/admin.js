import { Module } from "framz"

import crud from "./routers/crud"

import baseAdminWrapper from "./front/AdminWrapper"
import baseAdmin from "./front/Admin"

class AdminModule extends Module {
    name = "admin"
    routers = [["/api", crud]]
}

export default new AdminModule()

export const AdminWrapper = baseAdminWrapper

export const Admin = baseAdmin
