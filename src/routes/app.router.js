const router = require("express").Router();
const wildcardRouteHandler = require("../utils/handler-functions.utils");

const healthController = require("../controllers/health.controller");
const testController = require("../controllers/test.controller");
const NotFoundError = require("../models/errors/client-errors/not-found.error");


router
    .get("/health", (req, res) => new healthController().checkHealth(req, res))
    ;

router
    .get("/test",async (req, res) => await new testController().get(req, res))
    .get("/test/:id", async (req, res) => await new testController().getById(req, res))
    .post("/test",async (req, res) => await new testController().post(req, res))
    .put("/test/:id", async(req, res) => await new testController().put(req, res))
    .delete("/test/:id", async (req, res) => await new testController().delete(req, res))
    .patch("/test/:id", async (req, res) => await new testController().patch(req, res))
    .patch("/softdelete/:id", async (req, res) => await new testController().softDelete(req, res))
    ;


router
    .get("*", wildcardRouteHandler)
    .post("*", wildcardRouteHandler)
    .put("*", wildcardRouteHandler)
    .delete("*", wildcardRouteHandler)
    .patch("*", wildcardRouteHandler);



module.exports = { appRouter: router };
