//const res = require("express/lib/response");
const httpStatusCodes = require("../enums/http-status-codes");

class ApplicationResponse {
    constructor(data, statusCode, error) {
        this.data = data;
        this.statusCode = statusCode;
        this.error = error;
        this.isSuccessful = Object.values(httpStatusCodes.SUCCESS).includes( statusCode );
    }

    sent = res => res.status(this.statusCode).json(this);
    
}

module.exports = ApplicationResponse;
