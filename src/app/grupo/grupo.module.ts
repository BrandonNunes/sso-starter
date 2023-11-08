import { Module } from '@nestjs/common';
import { GrupoService } from './grupo.service';
import { GrupoController } from './grupo.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {GrupoModel} from "./entities/grupo.entity";
import {PermissaoModel} from "../permissoes/entities/permissoes.entity";
import {DominioModel} from "../dominio/entities/dominio.entity";

@Module({
  imports: [SequelizeModule.forFeature([GrupoModel,DominioModel, PermissaoModel])],
  controllers: [GrupoController],
  providers: [GrupoService],
})
export class GrupoModule {}
