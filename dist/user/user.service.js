"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../config");
const bcrypt_1 = require("bcrypt");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(createUserDto) {
        const userByEmail = await this.userRepository.findOne({
            where: { email: createUserDto.email },
        });
        const userByUsername = await this.userRepository.findOne({
            where: { username: createUserDto.username },
        });
        if (userByEmail || userByUsername) {
            throw new common_1.HttpException('User with this email or username already exists', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        const newUser = new user_entity_1.UserEntity();
        Object.assign(newUser, createUserDto);
        return await this.userRepository.save(newUser);
    }
    async login(loginUserDto) {
        const user = await this.userRepository.findOne({
            where: { email: loginUserDto.email },
            select: ['id', 'username', 'email', 'password', 'bio', 'image'],
        });
        if (!user) {
            throw new common_1.HttpException('Credentials are not valid', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        const isPasswordCorrect = await (0, bcrypt_1.compare)(loginUserDto.password, user.password);
        if (!isPasswordCorrect) {
            throw new common_1.HttpException('Credentials are not valid', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        delete user.password;
        return user;
    }
    findById(id) {
        return this.userRepository.findOne({ where: { id } });
    }
    generateJWT(user) {
        return (0, jsonwebtoken_1.sign)({
            id: user.id,
            username: user.username,
            email: user.email,
        }, config_1.JWT_SECRET);
    }
    buildUserResponse(user) {
        return {
            user: {
                ...user,
                token: this.generateJWT(user),
            },
        };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map