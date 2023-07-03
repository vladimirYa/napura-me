import { Schema, model } from "mongoose"
import { IMasterDocument } from "../../interfaces/master/master.interface";


const masterSchema = new Schema<IMasterDocument>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
    },
    messenger: {
        type: String,
        required: true
    },
});

export default model<IMasterDocument>("Master", masterSchema);