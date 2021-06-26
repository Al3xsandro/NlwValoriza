import { UsersRepositories } from '../repositories/UserRepositories';
import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService {
    async excute({ name, email, admin = false, password }: IUserRequest){
        const userRepostory = getCustomRepository(UsersRepositories);
        
        if(!email){
            throw new Error('Incorrect email!');
        };

        if(!password){
            throw new Error('You write your password');
        };

        const userAlreadyExists = await userRepostory.findOne({
            email
        });

        if(userAlreadyExists){
            throw new Error('User already exists!');
        };

        const password_hash = await hash(password, 8)

        const user = userRepostory.create({
            name,
            email,
            admin,
            password: password_hash
        });

        await userRepostory.save(user);

        delete user.password

        return user;
    };
};

export { CreateUserService };