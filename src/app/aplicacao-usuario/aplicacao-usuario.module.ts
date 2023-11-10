import { Module } from '@nestjs/common';
import { AplicacaoUsuarioService } from './aplicacao-usuario.service';
import { AplicacaoUsuarioController } from './aplicacao-usuario.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {AplicacaoUsuarioModel} from "./entities/aplicacao-usuario.entity";
import {AplicacaoModel} from "../aplicacao/entities/aplicacao.entity";
import {UsuarioModel} from "../usuarios/entities/usuario.entity";

@Module({
  imports: [SequelizeModule.forFeature([AplicacaoUsuarioModel, AplicacaoModel, UsuarioModel])],
  controllers: [AplicacaoUsuarioController],
  providers: [AplicacaoUsuarioService],
})
export class AplicacaoUsuarioModule {}
