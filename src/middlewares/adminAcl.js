import { database, aclManager, createError } from "framz"

export default type => (req, res, next) => {
    const modelName = req.params.modelName

    if (database.hasUrlModel(modelName) === false) {
        req.isModelRoute = false
        return next()
    }

    const role = `ROLE_${modelName.toUpperCase()}_${type.toUpperCase()}`

    if (aclManager.isGranted(req, role) === false) {
        return next(createError(403))
    }

    return next()
}
