import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './login.dto';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private readonly jwtService;
    private readonly usersService;
    constructor(jwtService: JwtService, usersService: UsersService);
    login(loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
}
