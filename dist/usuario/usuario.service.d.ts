import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from '../../src/';
export declare class UsuarioService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUsuarioDto: CreateUsuarioDto): any;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): any;
    remove(id: number): any;
}
