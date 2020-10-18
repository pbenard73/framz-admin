import { database, aclManager, createError } from "framz"

export default type => async (req, res, next) => {
    const modelName = req.params.modelName

    if (database.hasUrlModel(modelName) === false) {
        req.isModelRoute = false
        return next()
    }

    const role = `ROLE_${database.modelsUrl[modelName].toUpperCase()}_${type.toUpperCase()}`

    if ((await aclManager.isGranted(req, role)) === false) {
        return next(createError(403))
    }

    return next()
}
