import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";


class SearchTagService {
    async execute(name: string) {
        const tagsRepositories = getCustomRepository(TagsRepositories);
        if(!name){
            throw new Error('Incorrect name');
        };

        const tag = await tagsRepositories.find({
            where: { name }
        });

        if(!tag){
            throw new Error('Wrong tag name');
        };

        return tag;
    }
};

export { SearchTagService };