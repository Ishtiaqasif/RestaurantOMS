const httpStatusCodes = require("../../enums/http-status-codes");
const ApplicationError = require("../application.error");

class ForbiddenError extends ApplicationError {
    constructor(
        errorMessage,
        errorName = "Forbidden",
        httpStatusCode = httpStatusCodes.CLIENT_ERROR.FORBIDDEN
    ) {
        super(errorMessage, errorName, httpStatusCode);
    }
}

module.exports = ForbiddenError;
