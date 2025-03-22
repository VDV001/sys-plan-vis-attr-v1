var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attraction } from './attractions.entity.js';
import { Injectable } from '@nestjs/common';
let AttractionsService = class AttractionsService {
    constructor(attractionRepository) {
        this.attractionRepository = attractionRepository;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.attractionRepository.find();
        });
    }
    create(attraction) {
        return __awaiter(this, void 0, void 0, function* () {
            attraction.mapLink = this.generateMapLink(attraction.latitude, attraction.longitude);
            return this.attractionRepository.save(attraction);
        });
    }
    update(id, attraction) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingAttraction = yield this.attractionRepository.findOne({ where: { id } });
            if (existingAttraction) {
                attraction.mapLink = this.generateMapLink(attraction.latitude, attraction.longitude);
                Object.assign(existingAttraction, attraction);
                return this.attractionRepository.save(existingAttraction);
            }
            return null;
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.attractionRepository.delete(id);
        });
    }
    generateMapLink(latitude, longitude) {
        return `https://www.google.com/maps?q=${latitude},${longitude}`;
    }
};
AttractionsService = __decorate([
    Injectable(),
    __param(0, InjectRepository(Attraction)),
    __metadata("design:paramtypes", [Repository])
], AttractionsService);
export { AttractionsService };
//# sourceMappingURL=attractions.service.js.map