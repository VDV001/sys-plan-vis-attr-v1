import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Attraction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  addedAt: Date;

  @Column()
  rating: number;

  @Column()
  photo: string;

  @Column()
  location: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  mapLink: string;

  @Column()
  status: string;
}
