import { Request, Response } from 'express';
import { DeleteTagService } from '../services/DeleteTagService';

class DeleteTagController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;
    
        const deleteTagService = new DeleteTagService();

        const deleteTag = await deleteTagService.execute(id);
    
        return res.json(deleteTag);
    };
};

export { DeleteTagController };