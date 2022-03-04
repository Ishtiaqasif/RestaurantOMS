//const res = require("express/lib/response");
const httpStatusCodes = require("../enums/http-status-codes");

class ApplicationResponse {
   
    send = (res, data, statusCode, error = null) => {
        let response = {
            data,
            statusCode,
            error,
            isSuccessful: Object.values(httpStatusCodes.SUCCESS).includes( statusCode ),
        }
        
        return  res.status(statusCode).json(response)};
    
}

module.exports = new ApplicationResponse();
