import { UsersRepositories } from '../repositories/UserRepositories';
import { getCustomRepository } from 'typeorm';

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {
    async excute({ name, email, admin}: IUserRequest){
        const userRepostory = getCustomRepository(UsersRepositories);
        
        if(!email){
            throw new Error('Incorrect email!');
        };

        const userAlreadyExists = await userRepostory.findOne({
            email
        });

        if(userAlreadyExists){
            throw new Error('User already exists!');
        };

        const user = userRepostory.create({
            name,
            email,
            admin
        });

        await userRepostory.save(user);

        return user;
    };
};

export { CreateUserService };