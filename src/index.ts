import dotenv from "dotenv";
dotenv.config();

import express, { json } from "express";
import cors from "cors";
import { productRoute } from "./routers/product.route";

const server = express();

server.use(cors());
server.use(json());

server.use(productRoute);

const port = process.env.PORT || 5001

server.listen(port, () => console.log(`Listening on port ${port}`))