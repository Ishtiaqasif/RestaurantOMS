const httpStatusCodes = require("../../enums/http-status-codes");
const ApplicationError = require("../application.error");

class UnauthorizedError extends ApplicationError {
    constructor(
        errorMessage,
        errorName = "Unauthorized",
        httpStatusCode = httpStatusCodes.CLIENT_ERROR.UNAUTHORIZED
    ) {
        super(errorMessage, errorName, httpStatusCode);
    }
}

module.exports = UnauthorizedError;
