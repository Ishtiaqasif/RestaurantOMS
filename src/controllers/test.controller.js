const { Container } = require("typedi");
const Test = require("../models/entities/test.entity");
const BadRequestError = require("../models/errors/client-errors/bad-request.error");
const ForbiddenError = require("../models/errors/client-errors/forbidden.error");
const NotFoundError = require("../models/errors/client-errors/not-found.error");
const TestService = require("../services/test.service");

class TestController {
    constructor() {
        this.service = Container.get(TestService);
    }

    async get(req, res) {
        throw new NotFoundError("Custom Not Found.");
        //throw new ForbiddenError("Custom Forbidden.");
        let objects = await this.service.getObjects();
        return res.status(200).send(objects);
    }

    getById(req, res) {
        console.log(req.params.id);
        let object = this.service.getObjectById(req.params.id);
        return res.status(200).send(object);
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
