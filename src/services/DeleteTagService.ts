import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class DeleteTagService {
    async execute(id: string) {
        const tagsRepositories = getCustomRepository(TagsRepositories);

        if(!id){
            throw new Error('Incorrect id');
        };

        const tagExists = await tagsRepositories.findOne({ id })
        
        if(!tagExists){
            throw new Error('Incorrect id');
        };

        const deleteTag = await tagsRepositories.delete(id);

        if(!deleteTag.affected){
            throw new Error('An error was occurred');
        };

        const deleted = `Deleted with success: ${id}`;

        return deleted;
    };
};

export { DeleteTagService };