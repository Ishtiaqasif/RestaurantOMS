const NotFoundError = require("../models/errors/client-errors/not-found.error");

let wildcardRouteHandlerFunction = (req, res) => {
    throw new NotFoundError(`${res.req.originalUrl} api url not found for method ${res.req.method}`)
};

module.exports = wildcardRouteHandlerFunction;