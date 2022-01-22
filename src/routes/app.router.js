const router = require("express").Router();

const healthController = require("../controllers/health.controller");
const testController = require("../controllers/test.controller");


router
    .get("/health", (req, res) => new healthController().checkHealth(req, res))
    ;

router
    .get("/test",async (req, res) => await new testController().get(req, res))
    .get("/test/:id", (req, res) => new testController().getById(req, res))
    .post("/test",async (req, res) => await new testController().post(req, res))
    .put("/test/:id", (req, res) => new testController().put(req, res))
    .delete("/test/:id", (req, res) => new testController().delete(req, res))
    .patch("/test/:id", (req, res) => new testController().patch(req, res))
    ;

module.exports = { appRouter: router };
