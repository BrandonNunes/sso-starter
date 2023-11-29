import { Module } from '@nestjs/common';
import { AplicacaoUsuarioService } from './aplicacao-usuario.service';
import { AplicacaoUsuarioController } from './aplicacao-usuario.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {AplicacaoUsuarioModel} from "./entities/aplicacao-usuario.entity";
import {AplicacaoModel} from "../aplicacao/entities/aplicacao.entity";
import {UsuarioModel} from "../usuarios/entities/usuario.entity";
import {AppClienteService} from "../aplicacao/aplicacao.service";
import {UsuariosService} from "../usuarios/usuarios.service";

@Module({
  imports: [SequelizeModule.forFeature([AplicacaoUsuarioModel, AplicacaoModel, UsuarioModel])],
  controllers: [AplicacaoUsuarioController],
  providers: [AplicacaoUsuarioService, AppClienteService, UsuariosService],
})
export class AplicacaoUsuarioModule {}
