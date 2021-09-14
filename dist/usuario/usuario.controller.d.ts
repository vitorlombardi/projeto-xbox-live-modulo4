import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    create(createUsuarioDto: CreateUsuarioDto): any;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): any;
    remove(id: number): any;
}
