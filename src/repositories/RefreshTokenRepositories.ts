import { EntityRepository, Repository } from "typeorm";
import { RefreshToken } from "../entities/RefreshToken";

@EntityRepository(RefreshToken)
class refreshTokenRepositories extends Repository<RefreshToken>{
};

export { refreshTokenRepositories };