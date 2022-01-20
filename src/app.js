require('reflect-metadata');
const TestService = require("./services/test.service");
const express = require('express');
const { appRouter } = require('./routes/app.router');
const {Container} = require('typedi');


const app = express();
const port = process.env.PORT || 4000;

Container.set(TestService, new TestService());



app.use(express.json());
app.use("/api", appRouter);

app.listen(port, () => {
  console.log(`restaurant-oms listening at http://localhost:${port}`)
});