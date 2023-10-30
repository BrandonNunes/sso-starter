import { Module } from '@nestjs/common';
import { PermissoesService } from './permissoes.service';
import { PermissoesController } from './permissoes.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {DominioModel} from "../dominio/entities/dominio.entity";
import {PermissaoModel} from "./entities/permissoes.entity";

@Module({
  imports:[SequelizeModule.forFeature([PermissaoModel, DominioModel])],
  controllers: [PermissoesController],
  providers: [PermissoesService],
})
export class PermissoesModule {}
