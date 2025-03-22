import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attraction } from './attractions.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AttractionsService {
  constructor(
    @InjectRepository(Attraction)
    private readonly attractionRepository: Repository<Attraction>,
  ) {}

  async findAll(): Promise<Attraction[]> {
    return this.attractionRepository.find();
  }

  async create(attraction: Attraction): Promise<Attraction> {
    attraction.mapLink = this.generateMapLink(attraction.latitude, attraction.longitude);
    return this.attractionRepository.save(attraction);
  }

  async update(id: number, attraction: Attraction): Promise<Attraction | null> {
    const existingAttraction = await this.attractionRepository.findOne({ where: { id } });
    if (existingAttraction) {
        attraction.mapLink = this.generateMapLink(attraction.latitude, attraction.longitude);
        Object.assign(existingAttraction, attraction);
        return this.attractionRepository.save(existingAttraction);
    }
    return null;
}

  async remove(id: number): Promise<void> {
    await this.attractionRepository.delete(id);
  }

  private generateMapLink(latitude: number, longitude: number): string {
    return `https://www.google.com/maps?q=${latitude},${longitude}`;
  }
}
