require("reflect-metadata");
require("express-async-errors");
require('dotenv').config();
const express = require("express");
const { Container } = require("typedi");

const TestService = require("./services/test.service");
const TestRepository = require("./repositories/test.repository");
const { appRouter } = require("./routes/app.router");
const { errorLogger, errorHandler } = require("./middleware/error-handler.middleware");
const connectDb = require("./config/dbConnection.config");
const UserRepository = require("./repositories/user.repository");
const UserService = require("./services/user.service");

//express
const app = express();

//db connection
connectDb();

//dependency injections
Container.set(TestRepository, new TestRepository());
Container.set(UserRepository, new UserRepository());

Container.set(TestService, new TestService());
Container.set(UserService, new UserService());

//middlewares
app.use(express.json());
app.use("/api", appRouter);
app.use(errorLogger);
app.use(errorHandler);

// process.on('unhandledRejection', (reason, p) => {throw new Error()});
// process.on('uncaughtException', (err) => {
//     console.error(err.message)
//     process.exit(1);
// });

//listener 
let port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`${process.env.APP_NAME} listening at http://localhost:${port}`);});
