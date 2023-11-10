import { Module } from '@nestjs/common';
import { GrupoUsuarioService } from './grupo-usuario.service';
import { GrupoUsuarioController } from './grupo-usuario.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {GrupoUsuarioModel} from "./entities/grupo-usuario.entity";
import {UsuarioModel} from "../usuarios/entities/usuario.entity";
import {GrupoModel} from "../grupo/entities/grupo.entity";

@Module({
  imports: [SequelizeModule.forFeature([GrupoUsuarioModel, UsuarioModel, GrupoModel])],
  controllers: [GrupoUsuarioController],
  providers: [GrupoUsuarioService],
})
export class GrupoUsuarioModule {}
