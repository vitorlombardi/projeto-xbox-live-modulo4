import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';

@Injectable()
export class PerfilService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPerfilDto: CreatePerfilDto) {
    return this.prisma.perfils.create({
      data: createPerfilDto,
      include: {
        jogos: {
          select: {
            nome: true,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.perfils.findMany();
  }

  findOne(id: number) {
    return this.prisma.perfils.findUnique({ where: { id } });
  }

  update(id: number, updatePerfilDto: UpdatePerfilDto) {
    // const jogosIds = updatePerfilDto.jogosIds;

    // delete updatePerfilDto.jogosIds;

    // const jogosDisconnectIds = updatePerfilDto.jogosDisconnectIds;

    // delete updatePerfilDto.jogosDisconnectIds;

    // const data = {
    //   ...updatePerfilDto,
    //   jogos: {
    //     connect: jogosIds?.map((id) => ({ id })),
    //     disconnect: jogosDisconnectIds?.map((id) => ({ id })),
    //   },
    // };

    // return this.prisma.perfils.update({
    //   where: { id },
    //   data,
    // });
    return "aaaa"
  }

  remove(id: number) {
    return this.prisma.perfils.delete({ where: { id } });
  }
}
