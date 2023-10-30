import { Module } from '@nestjs/common';
import { DominioService } from './dominio.service';
import { DominioController } from './dominio.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {DominioModel} from "./entities/dominio.entity";

@Module({
  imports: [SequelizeModule.forFeature([DominioModel])],
  controllers: [DominioController],
  providers: [DominioService],
})
export class DominioModule {}
