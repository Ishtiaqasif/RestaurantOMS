require("reflect-metadata");
const TestService = require("./services/test.service");
const TestRepository = require("./repositories/test.repository");
const express = require("express");
const { appRouter } = require("./routes/app.router");
const { Container } = require("typedi");

const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const dbInstance = mongoose.connect(
            "mongodb+srv://courier:test12345@courier-service.hhqw5.mongodb.net/courier-service?w=majorityretryWrites=true"
        );

        console.log("Mongo DB connected!");
        return dbInstance;
    } catch (e) {
        console.log("Error occurred connecting db. Error: ", e);
    }
};

const app = express();
const port = process.env.PORT || 4000;

connectDB();

Container.set(TestRepository, new TestRepository());
Container.set(TestService, new TestService());

app.use(express.json());

app.use("/api", appRouter);

app.listen(port, () => {
    console.log(`restaurant-oms listening at http://localhost:${port}`);
});

