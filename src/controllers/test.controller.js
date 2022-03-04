const { Container } = require("typedi");
const httpStatusCodes = require("../models/enums/http-status-codes");
const TestService = require("../services/test.service");
const appResponse = require("../models/responses/application.response");
const ApplicationError = require("../models/errors/application.error");
const UnauthorizedError = require("../models/errors/client-errors/unauthorized.error");
class TestController {
    constructor() {
        this.service = Container.get(TestService);
    }

    async get(req, res) {
        let objects = await this.service.getObjects();
        appResponse.send(res, objects, httpStatusCodes.SUCCESS.OK);
    }

    async getById(req, res) {
        let object = await this.service.getObjectById(req.params.id);
        console.log({ 'controller': object });
        appResponse.send(res, object, httpStatusCodes.SUCCESS.OK);
    }

    async post(req, res) {
        let result = await this.service.addObject(req.body);
        return res.status(201).send(result);
    }

    put(req, res) {
        this.service.replaceObject(req.params.id, req.body);
        let updatedObject = this.service.getObjectById(req.params.id);
        return res.status(200).send(updatedObject);
    }

    delete(req, res) {
        this.service.deleteObject(req.params.id);
        return res.status(200).send();
    }

    patch(req, res) {
        this.service.patchObject(req.params.id, req.body);
        let updatedObject = this.service.getObjectById(req.params.id);
        return res.status(200).send(updatedObject);
    }
}

module.exports = TestController;
