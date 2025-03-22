import { Repository } from 'typeorm';
import { Attraction } from './attractions.entity';
export declare class AttractionsService {
    private readonly attractionRepository;
    constructor(attractionRepository: Repository<Attraction>);
    findAll(): Promise<Attraction[]>;
    create(attraction: Attraction): Promise<Attraction>;
    update(id: number, attraction: Attraction): Promise<Attraction | null>;
    remove(id: number): Promise<void>;
    private generateMapLink;
}
