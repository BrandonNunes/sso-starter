import { Module } from '@nestjs/common';
import { UsuarioPermissaoService } from './usuario-permissao.service';
import { UsuarioPermissaoController } from './usuario-permissao.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {UsuarioPermissaoModel} from "./entities/usuario-permissao.entity";
import {UsuarioModel} from "../usuarios/entities/usuario.entity";
import {PermissaoModel} from "../permissoes/entities/permissoes.entity";

@Module({
  imports: [SequelizeModule.forFeature([UsuarioPermissaoModel, UsuarioModel, PermissaoModel])],
  controllers: [UsuarioPermissaoController],
  providers: [UsuarioPermissaoService],
})
export class UsuarioPermissaoModule {}
