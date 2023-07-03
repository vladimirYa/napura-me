import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from "morgan";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import MasterRoutes from "./api/routes/master.routes";

class App {
    public app: Application;

    constructor() {
        dotenv.config();
        this.app = express();
        this.plugins();
        this.routes();
    }

    protected plugins(): void {
        this.app.use(helmet());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(cors({
            origin: '*'
        }));
        this.app.use(morgan("dev"));
        this.app.use(compression());
    }

    protected routes(): void {
        // Auth Routes
        this.app.use('/master', MasterRoutes);
        // // User Routes
        // this.app.use("/api/user", UserRoutes);

    }

}
const app = new App().app;
const DEV_PORT = process.env.DEV_PORT;

const dbURI = <string>process.env.MONGO_DB_URI;


mongoose.connect(dbURI)
    .then(() => {
        console.log('connected to db')

        app.listen(DEV_PORT, () => {
            console.log(DEV_PORT);
        });

    })
    .catch((err:any) => console.log(err));



