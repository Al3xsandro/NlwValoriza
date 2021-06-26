import express, { NextFunction, Request, Response} from 'express';

import cors from 'cors';
import 'reflect-metadata';
import 'express-async-errors';

import './database';
import { router } from './routes';

const app = express();
app.use(cors());

app.use(express.json());

app.use(router);

app.use((
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if(err instanceof Error){
        return res.status(400).json({
            message: err.message
        });
    };

    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
    });
});

export { app };