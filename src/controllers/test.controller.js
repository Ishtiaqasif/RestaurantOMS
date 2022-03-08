const { Container } = require("typedi");
const httpStatusCodes = require("../models/enums/http-status-codes");
const TestService = require("../services/test.service");
const appResponse = require("../models/responses/application.response");
const ApplicationError = require("../models/errors/application.error");
const NotFoundError = require("../models/errors/client-errors/not-found.error");
class TestController {
    constructor() {
        this.service = Container.get(TestService);
    }

    async get(req, res) {
        let objects = await this.service.getObjects();
        
        if(objects.length == 0) throw new NotFoundError();
        
        appResponse.send(res, objects, httpStatusCodes.SUCCESS.OK);

    }

    async getById(req, res) {
        let object = await this.service.getObjectById(req.params.id);
        appResponse.send(res, object, httpStatusCodes.SUCCESS.OK);
    }

    async post(req, res) {
        let object = await this.service.addObject(req.body);
        appResponse.send(res, object, httpStatusCodes.SUCCESS.OK);
    }

    async put(req, res) {
        let object = await this.service.replaceObject(req.params.id, req.body);
        appResponse.send(res, object, httpStatusCodes.SUCCESS.OK);
    }

    async delete(req, res) {
        await this.service.deleteObject(req.params.id);
        appResponse.send(res, {'message': 'data deleted successfully'}, httpStatusCodes.SUCCESS.OK);
    }

    async patch(req, res) {
        let object = await this.service.patchObject(req.params.id, req.body);
        appResponse.send(res, object, httpStatusCodes.SUCCESS.OK);
    }
    
    async softDelete(req, res) {
        await this.service.softDeleteObject(req.params.id);
        appResponse.send(res, {'message': 'data deleted successfully'}, httpStatusCodes.SUCCESS.OK);


    }
}

module.exports = TestController;
