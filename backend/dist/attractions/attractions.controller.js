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
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AttractionsService } from './attractions.service.js';
import { Attraction } from './attractions.entity.js';
let AttractionsController = class AttractionsController {
    constructor(attractionsService) {
        this.attractionsService = attractionsService;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.attractionsService.findAll();
        });
    }
    create(attraction) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.attractionsService.create(attraction);
        });
    }
    update(id, attraction) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.attractionsService.update(id, attraction);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.attractionsService.remove(id);
        });
    }
};
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AttractionsController.prototype, "findAll", null);
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Attraction]),
    __metadata("design:returntype", Promise)
], AttractionsController.prototype, "create", null);
__decorate([
    Put(':id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Attraction]),
    __metadata("design:returntype", Promise)
], AttractionsController.prototype, "update", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AttractionsController.prototype, "remove", null);
AttractionsController = __decorate([
    Controller('attractions'),
    __metadata("design:paramtypes", [AttractionsService])
], AttractionsController);
export { AttractionsController };
//# sourceMappingURL=attractions.controller.js.map