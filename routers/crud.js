import { Router, database, cache, createError } from "framz"
import auth from "./../middlewares/adminAcl"
import listAction from './../crudActions/list'

const router = new Router()

router.get("/:modelName", auth("list"), listAction)

router.get('/:modelName/:id', auth('show'), getAction)

router.put('/:modelName/:id', auth('edit'), getAction)

router.post('/:modelName', auth('create'), getAction)

router.delete('/:modelName', auth('delete'), getAction)
