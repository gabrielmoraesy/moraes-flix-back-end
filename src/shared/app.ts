import "reflect-metadata";
import "@/shared/container"
import express from "express";
import { router } from "./infra/http/routes";
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

export { app };  