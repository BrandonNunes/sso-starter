import { Module } from '@nestjs/common';
import { GrupoService } from './grupo.service';
import { GrupoController } from './grupo.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {GrupoModel} from "./entities/grupo.entity";

@Module({
  imports: [SequelizeModule.forFeature([GrupoModel])],
  controllers: [GrupoController],
  providers: [GrupoService],
})
export class GrupoModule {}
