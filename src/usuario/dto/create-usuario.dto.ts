import { Usuario } from '../entities/usuario.entity';
import { IsString, IsEmail, IsBoolean } from 'class-validator';
import { Cpf } from '../../decorators/isCPF';

export class CreateUsuarioDto implements Usuario {
  @IsString()
  nome: string;

  @IsString()
  sobrenome: string;

  @IsEmail()
  email: string;

  @IsString()
  senha: string;

  @Cpf()
  cpf: string;

  @IsBoolean()
  admin: boolean;
}
