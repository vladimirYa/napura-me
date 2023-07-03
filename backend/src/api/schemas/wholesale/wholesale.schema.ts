import { Schema, model } from "mongoose"
import { IWholesaleDocument } from "../../interfaces/wholesale/wholesale.interface";

const wholesaleSchema = new Schema<IWholesaleDocument>({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    messenger: {
        type: String,
        required: true
    },
});

export default model<IWholesaleDocument>("Wholesale", wholesaleSchema);