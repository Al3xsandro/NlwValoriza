import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid} from 'uuid'

@Entity("users")
class User {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
};

export { User };