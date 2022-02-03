const httpStatusCodes = require("../../enums/http-status-codes");
const ApplicationError = require("../application.error");

class BadRequestError extends ApplicationError {
    constructor(errorMessage, errorName = "Bad Request", httpStatusCode = httpStatusCodes.CLIENT_ERROR.BAD_REQUEST) {
        super(errorMessage, errorName, httpStatusCode);
    }
}

module.exports = BadRequestError;
