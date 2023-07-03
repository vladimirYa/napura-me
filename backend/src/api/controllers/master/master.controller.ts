import { Request, Response } from 'express';
import { IController } from '../../interfaces/common/controller.interface';
import { IMasterDocument } from '../../interfaces/master/master.interface';
import MasterService from '../../services/master/master.service';

class MasterController implements IController {

    async index(req: Request, res: Response): Promise<Response>  {
        const masters: Array<IMasterDocument> = await MasterService.getAll();

        return res.send(masters);
    }

    async create(req: Request, res: Response): Promise<Response> {

        const master: IMasterDocument | any = await MasterService.create(req.body);
        console.log(master)
        if (master.code) {
            if (master.code === 11000) return res.status(400).json(master.keyValue);

            return res.status(400);
        }
        return res.send(master);
    }

    async read(req: Request, res: Response): Promise<Response>  {

        const masterById: IMasterDocument | null = await MasterService.getById(req.params.id);

        return res.send(masterById);
    }

    async update(req: Request, res: Response): Promise<Response>  {

        const updatedMaster: IMasterDocument | null = await MasterService.update(req.params.id, req.body);

        return res.send(updatedMaster);
    }

    async delete(req: Request, res: Response): Promise<Response>  {

        const mastersAfterDelete: Array<IMasterDocument> = await MasterService.delete(req.params.id);

        return res.send(mastersAfterDelete);
    }
}

export default new MasterController();