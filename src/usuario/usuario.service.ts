import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    return this.prisma.Usuarios.create({ data: createUsuarioDto });
  }

  findAll() {
    return this.prisma.Usuarios.findMany();
  }

  findById(id: number) {
    return this.prisma.Usuarios.findUnique({ where: { id } });
  }

  findByEmail(email: string) {
    return this.prisma.Usuarios.findUnique({ where: { email } });
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.prisma.Usuarios.update({
      where: { id },
      data: updateUsuarioDto,
    });
  }

  remove(id: number) {
    return this.prisma.Usuarios.delete({ where: { id } });
  }
}
