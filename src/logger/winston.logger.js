const winston = require('winston');

const logConfiguration = {
    
    transports: [
        new winston.transports.File({
            level: 'error',
            filename: 'logs/error.log'    
        }),
        new winston.transports.Console({})
    ]
};

const logger = winston.createLogger(logConfiguration);


module.exports = logger;
