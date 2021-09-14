import { Usuario } from '../entities/usuario.entity';
export declare class CreateUsuarioDto implements Usuario {
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    cpf: string;
    admin: boolean;
}
