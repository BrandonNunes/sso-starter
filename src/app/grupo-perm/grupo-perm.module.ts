import { Module } from '@nestjs/common';
import { GrupoPermService } from './grupo-perm.service';
import { GrupoPermController } from './grupo-perm.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {GrupoPermModel} from "./entities/grupo-perm.entity";
import {GrupoModel} from "../grupo/entities/grupo.entity";
import {PermissaoModel} from "../permissoes/entities/permissoes.entity";

@Module({
  imports: [SequelizeModule.forFeature([GrupoPermModel, GrupoModel, PermissaoModel])],
  controllers: [GrupoPermController],
  providers: [GrupoPermService],
})
export class GrupoPermModule {}
