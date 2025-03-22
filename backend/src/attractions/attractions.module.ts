import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttractionsController } from './attractions.controller';
import { AttractionsService } from './attractions.service';
import { Attraction } from './attractions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Attraction])],
  controllers: [AttractionsController],
  providers: [AttractionsService],
})
export class AttractionsModule {}
