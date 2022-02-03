const httpStatusCodes = require("../../enums/http-status-codes");
const ApplicationError = require("../application.error");

class InternalServerError extends ApplicationError {
    constructor(
        errorMessage = "Something went wrong",
        errorName = "Internal Server Error",
        httpStatusCode = httpStatusCodes.SERVER_ERROR.INTERNAL_SERVER_ERROR
    ) {
        super(errorMessage, errorName, httpStatusCode);
    }
}

module.exports = InternalServerError;
