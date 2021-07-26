import { Request, Response } from 'express';
import { RefreshTokenService } from '../services/RefreshTokenService';

import { validate } from 'uuid';

class RefreshTokenController {
    async handle(req: Request, res: Response){
        const { refresh_token } = req.body;

        if(!validate(refresh_token)){
            throw new Error('Invalid uuid');
        };

        const refreshTokenService = new RefreshTokenService();

        const token = await refreshTokenService.execute(refresh_token);

        return res.json(token);
    };
};

export { RefreshTokenController };