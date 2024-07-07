import express, { NextFunction, Request, Response } from "express";
import router from "./routes";
import cors from "cors";
require('dotenv').config()

const app = express();

app
  .use(express.json())
  .use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Origin', process.env.CLIENT_HOST);
    res.header('Access-Control-Allow-Methods', 'GET, POST');

    app.use(cors());
    next();
  })
  .use(router);


export default app;