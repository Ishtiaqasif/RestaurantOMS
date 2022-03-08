//const res = require("express/lib/response");
const httpStatusCodes = require("../enums/http-status-codes");

class ApplicationResponse {
   
    send = (res, data, statusCode, message = "") => {
        let response = {
            data,
            isSuccessful: Object.values(httpStatusCodes.SUCCESS).includes( statusCode ),
            message
        }
        
        return  res.status(statusCode).json(response)};
    
}

module.exports = new ApplicationResponse();
