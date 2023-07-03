import { Document } from "mongoose";

export interface IWholesale {
    name: string;
    phone: string;
    email: string;
    messenger: string;
}

export interface IWholesaleDocument extends IWholesale, Document {}