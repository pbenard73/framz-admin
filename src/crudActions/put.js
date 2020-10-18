import { database, createError,  } from "framz"

export default (req, res, next) => {
    if (req.isModelRoute === false) {
        return next()
    }
	
    const { modelName, id } = req.params
    const data = req.body

    database
        .getUrlRepository(modelName)
        .update(data, {where: {id}})
        .then(data => res.json({ valid: true, data }))
        .catch(error => next(createError(500, error)))
}
