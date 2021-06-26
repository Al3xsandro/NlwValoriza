import { TagsRepositories } from "../repositories/TagsRepositories";


class SearchTagService {
    async execute(id: string) {
        const tagsRepositories = new TagsRepositories();

        const tagExists = tagsRepositories.findOne({ id });


    }
};

export { SearchTagService };