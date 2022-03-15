const { default: Container } = require("typedi");
const httpStatusCodes = require("../models/enums/http-status-codes");
const appResponse = require("../models/responses/application.response");
const UserService = require("../services/user.service");

class UserController{
    constructor() {
        this.service = Container.get(UserService);
    }

    async post(req, res) {

        // let validator = TestValidationSchema.validate(req.body);
        // if(validator.error) throw new BadRequestError(validator.error.details[0].message);

        let newUser = await this.service.addUser(req.body);
        appResponse.send(res, newUser, httpStatusCodes.SUCCESS.OK);
    }
}

module.exports = UserController;