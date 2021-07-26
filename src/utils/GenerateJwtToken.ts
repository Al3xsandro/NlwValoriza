import { sign } from "jsonwebtoken";

import dotenv from 'dotenv';
dotenv.config();

class GenerateJwtToken {
    async execute(userId: string, userEmail: string) {
        const token = sign({
            email: userEmail
        }, 
        process.env.JWT_TOKEN,
        {
            subject: userId,
            expiresIn: '1d'
        });

        return token
    };
};

export { GenerateJwtToken };