import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AttractionsService } from './attractions.service';
import { Attraction } from './attractions.entity';

@Controller('attractions')
export class AttractionsController {
  constructor(private readonly attractionsService: AttractionsService) {}

  @Get()
  async findAll(): Promise<Attraction[]> {
    return this.attractionsService.findAll();
  }

  @Post()
  async create(@Body() attraction: Attraction): Promise<Attraction> {
    return this.attractionsService.create(attraction);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() attraction: Attraction): Promise<Attraction | null> {
    return this.attractionsService.update(id, attraction);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.attractionsService.remove(id);
  }
}
