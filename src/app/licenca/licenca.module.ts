import { Module } from '@nestjs/common';
import { LicencaService } from './licenca.service';
import { LicencaController } from './licenca.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {LicencaModel} from "./entities/licenca.entity";
import {AplicacaoModel} from "../aplicacao/entities/aplicacao.entity";

@Module({
  imports: [SequelizeModule.forFeature([LicencaModel, AplicacaoModel])],
  controllers: [LicencaController],
  providers: [LicencaService],
})
export class LicencaModule {}
