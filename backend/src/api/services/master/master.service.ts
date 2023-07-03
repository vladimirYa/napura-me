import Master from '../../schemas/master/master.schema';
import { IMaster, IMasterDocument } from "../../interfaces/master/master.interface";

class MasterService {

    async getAll(): Promise<Array<IMasterDocument>> {
        return await Master.find({});
    }

    async create(body: IMaster): Promise<IMasterDocument> {

        
        return await Master.create({
            ...body
        }).catch((err: any) => {
            if (err.code && err.code === 11000) {
                return err;
            } else {
                return err
            }
        });
    }

    async getById(id: string): Promise<IMasterDocument | null> {
        return await Master.findById(id);
    }

    async getByMastername(username: string): Promise<IMasterDocument | null> {
        return await Master.findOne({username});
    }

    async update(id: string, updateBody: any): Promise<IMasterDocument | null> {

        await Master.findByIdAndUpdate(id, updateBody);

        return await Master.findById(id);
    }

    async delete(id: string): Promise<Array<IMasterDocument>> {
        
        await Master.findByIdAndDelete(id);

        return await Master.find({});
    }

}

export default new MasterService();