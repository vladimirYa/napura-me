import { Request, Response } from "express";

export interface IController {
    index(req: Request, res: Response): Promise<Response>;
    create(req: Request, res: Response): Promise<Response>;
    read(req: Request, res: Response): Promise<Response>;
    update(req: Request, res: Response): Promise<Response>;
    delete(req: Request, res: Response): Promise<Response>;
}