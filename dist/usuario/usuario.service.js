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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
let UsuarioService = class UsuarioService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findOne(id) {
        throw new Error('Method not implemented.');
    }
    async create(createUsuarioDto) {
        const data = Object.assign(Object.assign({}, createUsuarioDto), { senha: await bcrypt.hash(createUsuarioDto.senha, 10) });
        const createdUsuario = await this.prisma.usuarios.create({ data });
        return Object.assign(Object.assign({}, createdUsuario), { senha: undefined });
    }
    findAll() {
        return this.prisma.usuarios.findMany();
    }
    findById(id) {
        return this.prisma.usuarios.findUnique({ where: { id } });
    }
    findByEmail(email) {
        return this.prisma.usuarios.findUnique({ where: { email } });
    }
    update(id, updateUsuarioDto) {
        return this.prisma.usuarios.update({
            where: { id },
            data: updateUsuarioDto,
        });
    }
    remove(id) {
        return this.prisma.usuarios.delete({ where: { id } });
    }
};
UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map