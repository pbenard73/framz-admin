import { Module } from "framz"

import crud from "./routers/crud"
import init from './initializers/acl'

import baseAdminWrapper from "./front/AdminWrapper"
import baseAdmin from "./front/Admin"
import baseGenerator from './front/adminGenerator'

class MyAdminModule extends Module {
    name = "admin"
    routers = [["/api", crud]]
    publicPaths = [
    	'./node_modules/framz-admin/build'
    ]
    initializers = {
    	init
    }
}

export const AdminModule = MyAdminModule

export const AdminWrapper = baseAdminWrapper

export const Admin = baseAdmin

export const generateAdmin = baseGenerator
