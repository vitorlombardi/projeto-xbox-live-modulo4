import { IsInt, IsString, IsUrl } from 'class-validator';

export class CreatePerfilDto {
  @IsString()
  nome: string;

  @IsUrl()
  imagemUrl: string;

  @IsInt()
  usuarioID: number;
}
