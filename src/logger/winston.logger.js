const winston = require('winston');

const logConfiguration = {
    
    transports: [
        new winston.transports.File({
            level: 'error',
            filename: 'logs/error.log',   
            format: winston.format.simple(),     
        }),
        new winston.transports.Console({
            format: winston.format.cli(),
        })
    ]
};

const logger = winston.createLogger(logConfiguration);


module.exports = logger;
