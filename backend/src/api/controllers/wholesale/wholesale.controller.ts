import { Request, Response } from 'express';
import { IController } from '../../interfaces/common/controller.interface';
import { IWholesaleDocument } from '../../interfaces/wholesale/wholesale.interface';
import WholesaleService from '../../services/wholesale/wholesale.service';

class WholesaleController implements IController {

    async index(req: Request, res: Response): Promise<Response>  {
        const wholesaleses: Array<IWholesaleDocument> = await WholesaleService.getAll();

        return res.send(wholesaleses);
    }

    async create(req: Request, res: Response): Promise<Response> {

        const wholesale: IWholesaleDocument | any = await WholesaleService.create(req.body);
        if (wholesale.code) {
            if (wholesale.code === 11000) return res.status(400).json(wholesale.keyValue);

            return res.status(400);
        }
        return res.send(wholesale);
    }

    async read(req: Request, res: Response): Promise<Response>  {

        const wholesalesById: IWholesaleDocument | null = await WholesaleService.getById(req.params.id);

        return res.send(wholesalesById);
    }

    async update(req: Request, res: Response): Promise<Response>  {

        const updatedWholesale: IWholesaleDocument | null = await WholesaleService.update(req.params.id, req.body);

        return res.send(updatedWholesale);
    }

    async delete(req: Request, res: Response): Promise<Response>  {

        const wholesalessAfterDelete: Array<IWholesaleDocument> = await WholesaleService.delete(req.params.id);

        return res.send(wholesalessAfterDelete);
    }
}

export default new WholesaleController();