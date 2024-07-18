import express, { NextFunction, Request, Response } from "express";
import router from "./routes";
import cors from "cors";
require("dotenv").config();

const app = express();

app.use(express.json());
app
  .use(
    cors({
      origin: process.env.CLIENT_HOST,
      allowedHeaders: ["Content-Type", "Authorization"],
      methods: ["GET", "POST", "PATCH"],
    })
  )
  .use(router)
  .use((error: Error, req: Request, res: Response, next: NextFunction) => {
    return res.status(500).send({ message: error.message });
  });

export default app;
