import { AttractionsService } from './attractions.service';
import { Attraction } from './attractions.entity';
export declare class AttractionsController {
    private readonly attractionsService;
    constructor(attractionsService: AttractionsService);
    findAll(): Promise<Attraction[]>;
    create(attraction: Attraction): Promise<Attraction>;
    update(id: number, attraction: Attraction): Promise<Attraction | null>;
    remove(id: number): Promise<void>;
}
