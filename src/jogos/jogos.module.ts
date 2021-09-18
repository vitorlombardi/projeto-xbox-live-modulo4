import { Module } from '@nestjs/common';
import { JogosService } from './jogos.service';
import { JogosController } from './jogos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [JogosController],
  providers: [JogosService],
})
export class JogosModule {}
