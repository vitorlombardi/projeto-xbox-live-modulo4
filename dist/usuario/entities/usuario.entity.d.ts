import { Prisma } from '.prisma/client';
export declare class Usuario implements Prisma.UsuariosUncheckedCreateInput {
    id?: number;
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    cpf: string;
    admin: boolean;
}
