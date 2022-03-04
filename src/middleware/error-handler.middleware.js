const logger = require("../logger/winston.logger");
const httpStatusCodes = require("../models/enums/http-status-codes");
const ApplicationError = require("../models/errors/application.error");
const InternalServerError = require("../models/errors/server-errors/internal-server.error");
const appResponse = require("../models/responses/application.response");

let errorLogger = (err, req, res, next) => {
    let errorLog = {
        isSystemError: 'Yes',//!(err instanceof ApplicationError),
        errorTime: new Date().toLocaleString("en-US", {
            timeZone: "Asia/Dhaka",
        }),
        errorCode:
            err.statusCode ||
            httpStatusCodes.SERVER_ERROR.INTERNAL_SERVER_ERROR,
        message: err.message,
        stack: err.stack,
    };

    logger.error(errorLog);
    
    next(err);
};


let errorHandler = (err, req, res, next) => {
    if (!(err instanceof ApplicationError)) err = new InternalServerError();
    appResponse.send(res,null, err.statusCode, err);
};



module.exports = { errorHandler, errorLogger };
