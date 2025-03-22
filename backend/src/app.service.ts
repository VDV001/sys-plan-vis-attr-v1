import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getConfig(): string {
    const jwtSecret = this.configService.get<string>('JWT_SECRET');
    if (!jwtSecret) {
      throw new Error('JWT_SECRET is not defined in the environment variables');
    }
    return jwtSecret;
  }

  getEnvVariable(): string {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      throw new Error('JWT_SECRET is not defined in the environment variables');
    }
    return jwtSecret;
  }
}
