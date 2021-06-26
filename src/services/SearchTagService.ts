import { TagsRepositories } from "../repositories/TagsRepositories";


class SearchTagService {
    async execute(nameCustom: string) {
        const tagsRepositories = new TagsRepositories();

        if(!nameCustom){
            throw new Error('Incorrect name');
        };

        const tagExists = await tagsRepositories.findOne({ nameCustom });

        if(!tagExists){
            throw new Error('Wrong name');
        };

        const tag = await tagsRepositories.find({ nameCustom });
        
        return tag;
    }
};

export { SearchTagService };