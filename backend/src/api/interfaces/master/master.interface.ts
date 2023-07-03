import { Document } from "mongoose";

export interface IMaster {
    name: string;
    phone: string;
    email: string;
    messenger: string;
}

export interface IMasterDocument extends IMaster, Document {}