import { Module } from "framz"

import crud from "./routers/crud"

import baseAdminWrapper from "./front/AdminWrapper"
import baseAdmin from "./front/Admin"

class MyAdminModule extends Module {
    name = "admin"
    routers = [["/api", crud]]
}

export const AdminModule = new MyAdminModule()

export const AdminWrapper = baseAdminWrapper

export const Admin = baseAdmin
