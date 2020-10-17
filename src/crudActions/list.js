import { database, cache, createError } from "framz"

export default (req, res, next) => {
    const modelName = req.params.modelName
    const cacheKey = `${modelName.toLowerCase()}_list`
    let paginationData = {
        page: req.query.page,
        perpage: req.query.perpage,
    }

    console.log('jsuis la')
    const paginate = options => {
        database
            .getUrlRepository(req, modelName)
            .paginate(paginationData)
            .then(data => res.json({ valid: true, data }))
            .catch(error => next(createError(500, error)))
    }

//    if (paginationData.page === null) {
        return paginate()
  //  }
/*
    cache
        .get(cacheKey)
        .then(data => {
            if (data !== null) {
                return res.json({ valid: true, data })
            }

            paginate(paginationData)
        })
        .catch(error => {
            paginate(paginationData)
        })
       */
}
