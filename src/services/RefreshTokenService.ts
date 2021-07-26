import { getCustomRepository } from "typeorm";
import { refreshTokenRepositories } from "../repositories/RefreshTokenRepositories";
import { GenerateJwtToken } from "../utils/GenerateJwtToken";

import dayjs from "dayjs";

class RefreshTokenService {
    async execute(refresh_token:string) {
        const refreshTokenRepository = getCustomRepository(refreshTokenRepositories);

        const refreshToken = await refreshTokenRepository.findOne({ where: { id: refresh_token }});

        if(!refreshToken){
            throw new Error('Refresh token not exists');
        };

        const refreshTokenExpired = dayjs().isAfter(dayjs.unix(refreshToken.expiresIn));

        const generateToken = new GenerateJwtToken();

        const token = await generateToken.execute(refreshToken.user_id);

        if(refreshTokenExpired){
            await refreshTokenRepository.delete({ user_id: refreshToken.user_id });

            const generateRefreshToken = new GenerateJwtToken();
            const newRefreshToken = await generateRefreshToken.execute(refreshToken.user_id);
            
            return { token, newRefreshToken }
        }

        return token;
    };
};

export { RefreshTokenService };