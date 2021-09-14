import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  findOne(id: number) {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly prisma: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const data = {
      ...createUsuarioDto,
      senha: await bcrypt.hash(createUsuarioDto.senha, 10),
    };

    const createdUsuario = await this.prisma.usuarios.create({ data });

    return {
      ...createdUsuario,
      senha: undefined,
    };
  }
  findAll() {
    return this.prisma.usuarios.findMany();
  }

  findById(id: number) {
    return this.prisma.usuarios.findUnique({ where: { id } });
  }

  findByEmail(email: string) {
    return this.prisma.usuarios.findUnique({ where: { email } });
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.prisma.usuarios.update({
      where: { id },
      data: updateUsuarioDto,
    });
  }

  remove(id: number) {
    return this.prisma.usuarios.delete({ where: { id } });
  }
}
