import { database, createError } from "framz"

export default (req, res, next) => {
    const { modelName } = req.params

    database
        .getUrlRepository(modelName)
        .create(req.body)
        .then(data => res.json({ valid: true, data }))
        .catch(error => next(createError(500, error)))
}
