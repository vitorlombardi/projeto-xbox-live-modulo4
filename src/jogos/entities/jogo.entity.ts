import { Genero } from 'src/generos/entities/genero.entity';
import { Perfil } from 'src/perfil/entities/perfil.entity';

export class Jogo {
  id?: string;

  nome: string;

  imagemUrl: string;

  Descricao: string;

  ano: number;

  nota: number;

  trailer: string;

  gameplay: string;

  perfils?: Perfil[];

  genero: Genero[];
}
