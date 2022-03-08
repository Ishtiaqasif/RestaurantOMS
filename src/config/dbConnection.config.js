const mongoose = require("mongoose");
const logger = require("../logger/winston.logger");

const connectDb = async () => {
    try {
        const dbInstance = mongoose.connect(process.env.CONNECTION_STRING);
        
        let { host, port, name } = (await dbInstance).connections[0];
        console.log(`Connected to ${name} at ${host}:${port}`);
        
        return dbInstance;
    } catch (e) {
        logger.error("Error occurred connecting db. Error: ", e);
    }
};

module.exports = connectDb;
