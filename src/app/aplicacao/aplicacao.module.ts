import { Module } from '@nestjs/common';
import { AppClienteService } from './aplicacao.service';
import { AppClienteController } from './aplicacao.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {AplicacaoModel} from "./entities/aplicacao.entity";
import {DominioModel} from "../dominio/entities/dominio.entity";
import {LicencaModel} from "../licenca/entities/licenca.entity";
import {DominioService} from "../dominio/dominio.service";

@Module({
  imports:[SequelizeModule.forFeature([AplicacaoModel, DominioModel, LicencaModel])],
  controllers: [AppClienteController],
  providers: [AppClienteService, DominioService],
})
export class AppClienteModule {}
