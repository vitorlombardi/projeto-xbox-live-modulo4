import { Jogo } from 'src/jogos/entities/jogo.entity';

export class Perfil {
  id?: number;

  nome: string;

  imagemUrl: string;

  usuarioID: number;

  jogos?: Jogo[];
}
