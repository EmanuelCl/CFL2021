import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaginaController } from './pagina/pagina.controller';
import { PaginaService } from './pagina/pagina.service';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioService } from './usuario/usuario.service';

@Module({
  imports: [ServeStaticModule.forRoot({rootPath: join(__dirname,"..","front")})],
  controllers: [AppController, PaginaController, UsuarioController],
  providers: [AppService, PaginaService, UsuarioService],
})
export class AppModule {}
