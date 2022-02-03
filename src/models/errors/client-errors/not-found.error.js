const httpStatusCodes = require("../../enums/http-status-codes");
const ApplicationError = require("../application.error");

class NotFoundError extends ApplicationError {
    constructor(
        errorMessage = "Resource was not found",
        errorName = "Not Found Error",
        httpStatusCode = httpStatusCodes.CLIENT_ERROR.NOT_FOUND
    ) {
        super(errorMessage, errorName, httpStatusCode);
    }
}

module.exports = NotFoundError;
