import { Request, Response } from 'express';
import { ListUserReceiverComplementsService } from '../services/ListUserReceiveComplimentsService';

class ListUserReceiverComplimentsController {
    async handle(req: Request, res: Response) {
        const { user_id } = req;

        const listUserReceiverComplimentsService = new ListUserReceiverComplementsService();

        const compliments = await listUserReceiverComplimentsService.execute(user_id);
        
        return res.json(compliments);
    };
};

export { ListUserReceiverComplimentsController };