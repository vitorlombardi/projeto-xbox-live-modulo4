import { Type } from 'class-transformer';
import { IsInt, IsNumber, IsString, ValidateNested } from 'class-validator';
import { CreateGeneroDto } from 'src/generos/dto/create-genero.dto';

export class CreateJogoDto {
  @IsString()
  nome: string;

  @IsString()
  imagemUrl: string;

  @IsString()
  Descricao: string;

  @IsNumber()
  ano: number;

  @IsNumber()
  nota: number;

  @IsString()
  trailer: string;

  @IsString()
  gameplay: string;

  @ValidateNested({ each: true })
  @Type(() => CreateGeneroDto)
  genero: CreateGeneroDto[];

  @IsNumber({}, { each: true })
  generoId: number[];
}
