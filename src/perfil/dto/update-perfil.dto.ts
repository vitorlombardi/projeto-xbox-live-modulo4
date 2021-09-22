import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional } from 'class-validator';
import { CreateJogoDto } from 'src/jogos/dto/create-jogo.dto';
import { CreatePerfilDto } from './create-perfil.dto';

export class UpdatePerfilDto extends PartialType(CreatePerfilDto) {
  @IsOptional()
  jogos?: CreateJogoDto[];

  @IsOptional()
  @IsNumber({}, { each: true })
  jogosIds: number[];

  @IsOptional()
  @IsNumber({}, { each: true })
  jogosDisconnectIds: number[];
}
