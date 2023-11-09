import { Module } from '@nestjs/common';
import { AppClienteService } from './aplicacao.service';
import { AppClienteController } from './aplicacao.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {AplicacaoModel} from "./entities/aplicacao.entity";
import {DominioModel} from "../dominio/entities/dominio.entity";

@Module({
  imports:[SequelizeModule.forFeature([AplicacaoModel, DominioModel])],
  controllers: [AppClienteController],
  providers: [AppClienteService],
})
export class AppClienteModule {}
