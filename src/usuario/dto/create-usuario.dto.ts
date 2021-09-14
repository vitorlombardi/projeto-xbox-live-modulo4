import { Usuario } from '../entities/usuario.entity';
import {
  IsBoolean,
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Cpf } from 'src/decorators/isCPF';

export class CreateUsuarioDto implements Usuario {
  @IsString()
  nome: string;

  @IsString()
  sobrenome: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  senha: string;

  @Cpf()
  cpf: string;

  @IsBoolean()
  admin: boolean;
}
