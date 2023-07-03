import Wholesale from '../../schemas/master/master.schema';
import { IWholesale, IWholesaleDocument } from "../../interfaces/wholesale/wholesale.interface";

class WholesaleService {

    async getAll(): Promise<Array<IWholesaleDocument>> {
        return await Wholesale.find({});
    }

    async create(body: IWholesale): Promise<IWholesaleDocument> {

        
        return await Wholesale.create({
            ...body
        }).catch((err: any) => {
            if (err.code && err.code === 11000) {
                return err;
            } else {
                return err
            }
        });
    }

    async getById(id: string): Promise<IWholesaleDocument | null> {
        return await Wholesale.findById(id);
    }

    async getByWholesalename(username: string): Promise<IWholesaleDocument | null> {
        return await Wholesale.findOne({username});
    }

    async update(id: string, updateBody: any): Promise<IWholesaleDocument | null> {

        await Wholesale.findByIdAndUpdate(id, updateBody);

        return await Wholesale.findById(id);
    }

    async delete(id: string): Promise<Array<IWholesaleDocument>> {
        
        await Wholesale.findByIdAndDelete(id);

        return await Wholesale.find({});
    }

}

export default new WholesaleService();