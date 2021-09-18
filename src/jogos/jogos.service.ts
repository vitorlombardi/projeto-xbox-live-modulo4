import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';

@Injectable()
export class JogosService {
  constructor(private readonly prisma: PrismaService) {}

  create(createJogoDto: CreateJogoDto) {
    const generoId = createJogoDto.generoId;

    delete createJogoDto.generoId;

    const data = {
      ...createJogoDto,
      genero: {
        connect: generoId?.map((id) => ({ id })),
      },
    };

    return this.prisma.jogos.create({
      data,
      include: { genero: true },
    });
  }

  findAll() {
    return this.prisma.jogos.findMany({ include: { genero: true } });
  }

  findOne(id: number) {
    return this.prisma.jogos.findUnique({ where: { id } });
  }

  update(id: number, updateJogoDto: UpdateJogoDto) {
    const generoId = updateJogoDto.generoId;
    delete updateJogoDto.generoId;

    const generoDisconnectIds = updateJogoDto.generoDisconnectIds;
    delete updateJogoDto.generoDisconnectIds;

    const perfilsIds = updateJogoDto.perfilsIds;
    delete updateJogoDto.perfilsIds;

    const perfilsIDisconnectIds = updateJogoDto.perfilsDisconnectIds;
    delete updateJogoDto.perfilsDisconnectIds;

    const data = {
      ...updateJogoDto,
      genero: {
        connect: generoId?.map((id) => ({ id })),
        disconnect: generoDisconnectIds?.map((id) => ({ id })),
      },
      perfils: {
        connect: perfilsIds?.map((id) => ({ id })),
        disconnect: perfilsIDisconnectIds?.map((id) => ({ id })),
      },
    };

    return this.prisma.jogos.update({
      where: { id },
      data,
      include: { genero: true },
    });
  }

  remove(id: number) {
    return this.prisma.jogos.delete({ where: { id } });
  }
}
