import { Injectable } from '@nestjs/common';
import { CreateAppClienteDto } from './dto/create-app_cliente.dto';
import { UpdateAppClienteDto } from './dto/update-app_cliente.dto';
import {InjectModel} from "@nestjs/sequelize";
import {AplicacaoModel} from "./entities/aplicacao.entity";
import {UsuarioModel} from "../usuarios/entities/usuario.entity";

@Injectable()
export class AppClienteService {
  constructor(
      @InjectModel(AplicacaoModel) private aplicacaoModel: typeof AplicacaoModel
  ) {
  }
  create(createAppClienteDto: CreateAppClienteDto) {
    return this.aplicacaoModel.create({...createAppClienteDto});
  }

  findAll() {
    return this.aplicacaoModel.findAll();
  }

  findAllAppsByDomain(idDomain: number) {
    return this.aplicacaoModel.findAll({
      where: {
        dominioId: idDomain
      }
    });
  }

  findOne(id: number) {
    return this.aplicacaoModel.findByPk(id, {
      include: [
        {
          model: UsuarioModel
        }
      ]
    });
  }
  findOneByDesc(desc: string) {
    return this.aplicacaoModel.findOne({
      where: { nomeApp: desc }
    });
  }

  update(id: number, updateAppClienteDto: UpdateAppClienteDto) {
    return this.aplicacaoModel.update(updateAppClienteDto, {where: { id }});
  }

  remove(id: number) {
    return this.aplicacaoModel.destroy({where: { id }});
  }
}
