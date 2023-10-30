import { Module } from '@nestjs/common';
import { AppClienteService } from './app_cliente.service';
import { AppClienteController } from './app_cliente.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {AppClienteModel} from "./entities/app_cliente.entity";
import {DominioModel} from "../dominio/entities/dominio.entity";

@Module({
  imports:[SequelizeModule.forFeature([AppClienteModel, DominioModel])],
  controllers: [AppClienteController],
  providers: [AppClienteService],
})
export class AppClienteModule {}
