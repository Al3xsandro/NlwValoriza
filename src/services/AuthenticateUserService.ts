import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";
import { GenerateRefreshTokenService } from "./GenerateRefreshTokenService";

import { compare } from 'bcryptjs';

import * as dotenv from 'dotenv';
import { GenerateJwtToken } from "../utils/GenerateJwtToken";
dotenv.config();

interface IAuthenticateRequest {
    email: string;
    password: string;
};

class AuthenticateUserService {
  async execute({email, password}:IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({
        email
    });

    if(!user){
        throw new Error('Email/Password incorrect!');
    };

    const passowrdMatch = await compare(password, user.password);

    if(!passowrdMatch){
        throw new Error('Email/Password incorrect!');
    };

    const generate = new GenerateJwtToken();
    
    const token = await generate.execute(user.id, user.email);

    const generateRefreshToken = new GenerateRefreshTokenService();
    const refreshToken = await generateRefreshToken.execute(user.id);

    return { token, refreshToken };
  };
};

export { AuthenticateUserService };