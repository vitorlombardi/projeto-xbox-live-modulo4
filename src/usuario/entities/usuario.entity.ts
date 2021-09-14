import { Prisma } from '.prisma/client';

export class Usuario implements Prisma.UsuariosUncheckedCreateInput {
  id?: number;
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  cpf: string;
  admin: boolean;
  perfils?: any;
}
