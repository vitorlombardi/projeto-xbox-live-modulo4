import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsNumber, IsOptional } from 'class-validator';
import { CreateJogoDto } from 'src/jogos/dto/create-jogo.dto';
import { CreatePerfilDto } from './create-perfil.dto';

export class UpdatePerfilDto extends PartialType(CreatePerfilDto) {
  @IsOptional()
  jogos?: CreateJogoDto[];

  @IsOptional()
  @IsInt()
  @IsNumber({}, { each: true })
  jogosDisconnectIds: number[];

  @IsOptional()
  @IsInt()
  @IsNumber({}, { each: true })
  jogosIds: number[];
}
