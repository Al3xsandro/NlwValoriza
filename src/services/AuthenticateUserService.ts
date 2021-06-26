import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";

import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import * as dotenv from 'dotenv';
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

    const token = sign({
        email: user.email,
    }, 
    process.env.JWT_TOKEN,
    {
        subject: user.id,
        expiresIn: '1d'
    });

    return token;
  };
};

export { AuthenticateUserService };