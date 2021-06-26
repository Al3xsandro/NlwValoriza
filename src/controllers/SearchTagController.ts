import { Request, Response } from 'express';
import { SearchTagService } from '../services/SearchTagService';

class SearchTagController {
    async handle(req: Request, res: Response){
        const { name } = req.params;

        const searchTagService = new SearchTagService();
        
        const tag = await searchTagService.execute(name);

        return res.json(tag);
    };
};

export { SearchTagController };