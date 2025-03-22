import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './login.dto';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService, private readonly usersService: UsersService) {}

  async login(loginDto: LoginDto): Promise<{ access_token: string }> {
    const user = await this.usersService.findOneByUsername(loginDto.username);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id, username: user.username };
    return {
      access_token: this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRATION + 's',
      }),
    };
  }
}
