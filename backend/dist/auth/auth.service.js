var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service.js';
import * as bcrypt from 'bcrypt';
let AuthService = class AuthService {
    constructor(jwtService, usersService) {
        this.jwtService = jwtService;
        this.usersService = usersService;
    }
    login(loginDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersService.findOneByUsername(loginDto.username);
            if (!user) {
                throw new UnauthorizedException('Invalid credentials');
            }
            const isPasswordValid = yield bcrypt.compare(loginDto.password, user.password);
            if (!isPasswordValid) {
                throw new UnauthorizedException('Invalid credentials');
            }
            const payload = { sub: user.id, username: user.username };
            return {
                access_token: this.jwtService.sign(payload, {
                    secret: process.env.JWT_SECRET,
                    expiresIn: process.env.JWT_EXPIRATION + 's',
                }),
            };
        });
    }
};
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [JwtService, UsersService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map