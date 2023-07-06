import { Request, Response } from 'express';

class AuthController {

    async auth(req: Request, res: Response): Promise<Response>  {
        if (req.body.login === process.env.ADMIN_LOGIN && req.body.pass === process.env.ADMIN_PASSWORD){
            return res.status(200).send({status: 200});
        } else {
            return res.status(401).send({status: 401});
        }
    }
}
export default new AuthController();