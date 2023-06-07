import express,{Application, NextFunction} from 'express';
import connectToMongoDb from './frameworks/database/mongodb/connection'
import http from 'http'
import serverConfig from './frameworks/webserver/server';
import expressConfig from './frameworks/webserver/express';
// import routes from './frameworks/webserver/routes';
import connection from './frameworks/database/redis/connection';
import Colors from 'colors.ts';
// import errorHandlingMiddleware from './frameworks/webserver/middlewares/errorHandlingMiddleware';
import AppError from './utils/appError';
import configKeys from './config';
Colors.enable

const app:Application = express();
const server = http.createServer(app);


//* connecting mongoDb
connectToMongoDb();

//* connection to redis
const redisClient = connection().createRedisClient()

expressConfig(app)
   
// routes for each endpoint
// routes(app,redisClient)


// app.use(errorHandlingMiddleware)

 // catch 404 and forward to error handler
 app.all('*', (req,res,next:NextFunction) => {
    next(new AppError('Not found', 404));
});


serverConfig(server).startServer()

export type RedisClient = typeof redisClient