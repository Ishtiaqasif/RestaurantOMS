class ApplicationError extends Error {
    constructor(errorMessage, errorName, statusCode) {
        super(errorMessage);
        //Object.setPrototypeOf(this, new.target.prototype);
        this.message = errorMessage;
        this.name = errorName;
        this.statusCode = statusCode;
    }
}

module.exports = ApplicationError;