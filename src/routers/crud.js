import { Router, database, cache, createError } from "framz"
import auth from "./../middlewares/adminAcl"
import listAction from "./../crudActions/list"
import getAction from "./../crudActions/get"
import putAction from "./../crudActions/put"
import postAction from "./../crudActions/post"
import deleteAction from "./../crudActions/delete"

const router = new Router()

router.get("/:modelName", auth("list"), listAction)

router.get("/:modelName/:id", auth("show"), getAction)

router.put("/:modelName/:id", auth("edit"), putAction)

router.post("/:modelName", auth("create"), postAction)

router.delete("/:modelName", auth("delete"), deleteAction)
