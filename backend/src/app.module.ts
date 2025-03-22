import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttractionsModule } from './attractions/attractions.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'db-attract',
      url: process.env.DATABASE_URL,
      entities: [__dirname + '/../**/*.entity{.ts,.сjs}'],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    AttractionsModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
