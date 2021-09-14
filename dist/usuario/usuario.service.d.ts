import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuarioService {
    private readonly prisma;
    findOne(id: number): void;
    constructor(prisma: PrismaService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<{
        senha: any;
        id: number;
        nome: string;
        sobrenome: string;
        email: string;
        cpf: string;
        admin: boolean;
    }>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Usuarios[]>;
    findById(id: number): import(".prisma/client").Prisma.Prisma__UsuariosClient<import(".prisma/client").Usuarios>;
    findByEmail(email: string): import(".prisma/client").Prisma.Prisma__UsuariosClient<import(".prisma/client").Usuarios>;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): import(".prisma/client").Prisma.Prisma__UsuariosClient<import(".prisma/client").Usuarios>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__UsuariosClient<import(".prisma/client").Usuarios>;
}
