import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional } from 'class-validator';
import { CreatePerfilDto } from 'src/perfil/dto/create-perfil.dto';
import { CreateJogoDto } from './create-jogo.dto';

export class UpdateJogoDto extends PartialType(CreateJogoDto) {
  @IsOptional()
  perfils?: CreatePerfilDto[];

  @IsOptional()
  @IsNumber({}, { each: true })
  perfilsDisconnectIds: number[];

  @IsOptional()
  @IsNumber({}, { each: true })
  perfilsIds: number[];

  @IsOptional()
  @IsNumber({}, { each: true })
  generoDisconnectIds: number[];
}
