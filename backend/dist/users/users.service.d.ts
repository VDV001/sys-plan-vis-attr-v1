import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findOneByUsername(username: string): Promise<User | null>;
    createUser(username: string, password: string): Promise<User>;
}
