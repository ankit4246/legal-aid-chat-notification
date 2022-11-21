import express, { NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import indexRoute from "./api/routes/index.routes";
export const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api", indexRoute);
