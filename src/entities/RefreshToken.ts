import {
    Entity,
    PrimaryColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

import { v4 as uuid } from 'uuid';
import { User } from './User';

@Entity("refresh_token")
class RefreshToken {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    expiresIn: number;
    
    @Column()
    user_id: string;

    @JoinColumn({ name: "user_id" })
    @ManyToOne(() => User)
    userId: User;

    constructor() {
        if(!this.id){
            this.id = uuid();
        };
    };
};

export { RefreshToken }