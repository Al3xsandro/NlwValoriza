import { getCustomRepository } from "typeorm";
import { refreshTokenRepositories } from "../repositories/RefreshTokenRepositories";

import dayjs from 'dayjs';

class GenerateRefreshTokenService {
    async execute(user_id: string) {
        const refreshTokenRepository = getCustomRepository(refreshTokenRepositories);

        const expiresIn = dayjs().add(15, 'second').unix(); 

        const genereateRefreshToken = refreshTokenRepository.create({
            user_id,
            expiresIn
        })

        await refreshTokenRepository.save(genereateRefreshToken);

        return genereateRefreshToken;
    };
};

export { GenerateRefreshTokenService };