import { Request, Response } from 'express';
import { ListTagsService } from '../services/ListTagsService';

class ListTagsController {
    async handle(req: Request, res: Response) {
        const listTagsService = new ListTagsService();
    
        const tags = await listTagsService.execute();

        // tags = tags.map( tag => (
        //     { ...tag, name_custom: `#${tag.name}`}
        // ));

        return res.json(tags);
    };
};

export { ListTagsController };