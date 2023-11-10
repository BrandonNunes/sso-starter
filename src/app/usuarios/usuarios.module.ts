import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {UsuarioModel} from "./entities/usuario.entity";
import {DominioModel} from "../dominio/entities/dominio.entity";
import {GrupoModel} from "../grupo/entities/grupo.entity";
import {PermissaoModel} from "../permissoes/entities/permissoes.entity";

@Module({
  imports:[SequelizeModule.forFeature([UsuarioModel, DominioModel, GrupoModel, PermissaoModel])],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}
