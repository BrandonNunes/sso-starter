import { Injectable } from '@nestjs/common';
import { CreateDominioDto } from './dto/create-dominio.dto';
import { UpdateDominioDto } from './dto/update-dominio.dto';
import {InjectModel} from "@nestjs/sequelize";
import {DominioModel} from "./entities/dominio.entity";
import {AplicacaoModel} from "../aplicacao/entities/aplicacao.entity";

@Injectable()
export class DominioService {
  constructor(
      @InjectModel(DominioModel) private dominioModel: typeof DominioModel
  ) {
  }
  create(createDominioDto: CreateDominioDto) {
    return this.dominioModel.create({...createDominioDto})
  }

  findAll() {
    return this.dominioModel.findAll();
  }

  findOne(id: number) {
    return this.dominioModel.findByPk(id, {
      include: [{
        model: AplicacaoModel
      }]
    });
  }

  update(id: number, updateDominioDto: UpdateDominioDto) {
    return this.dominioModel.update(updateDominioDto, {where: {id}})
  }

  remove(id: number) {
    return this.dominioModel.destroy({where: {id}})
  }
}
