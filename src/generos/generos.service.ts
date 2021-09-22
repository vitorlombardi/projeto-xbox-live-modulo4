import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Injectable()
export class GenerosService {
  constructor(private readonly prisma: PrismaService) {}

  create(createGeneroDto: CreateGeneroDto) {
    return this.prisma.genero.create({
      data: createGeneroDto,
    });
  }

  findAll() {
    return this.prisma.genero.findMany({
      include: {
        jogos: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.genero.findUnique({ where: { id } });
  }

  update(id: number, updateGeneroDto: UpdateGeneroDto) {
    return this.prisma.genero.update({ where: { id }, data: updateGeneroDto });
  }

  remove(id: number) {
    return this.prisma.genero.delete({ where: { id } });
  }
}
