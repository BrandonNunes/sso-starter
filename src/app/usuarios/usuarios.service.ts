import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import {InjectModel} from "@nestjs/sequelize";
import {UsuarioModel} from "./entities/usuario.entity";
import {AplicacaoModel} from "../aplicacao/entities/aplicacao.entity";

@Injectable()
export class UsuariosService {

  constructor(
      @InjectModel(UsuarioModel) private usuarioModel: typeof UsuarioModel
  ) {
  }
  create(createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioModel.create({...createUsuarioDto});
  }

  findAll(idDominio?: number) {
    if(idDominio) {
      return this.usuarioModel.findAll({
        where: {
          dominioId: idDominio
        }
      });
    }
    return this.usuarioModel.findAll({
      attributes: {exclude: ['senha']}
    });
  }

  findOne(id: number) {
    return this.usuarioModel.findByPk(id,
        {
          attributes:{exclude: ['senha']},
          include: [{
            model: AplicacaoModel,
            attributes: {exclude: ['logo']}
          }]
        });
  }

  findOneUserByEmailInDomain(email: string, dominioId: number) {
    return this.usuarioModel.findOne({where: { email, dominioId }});
  }

  findAllAppsByDomain(idDomain: number) {
    return this.usuarioModel.findAll({
      where: {
        dominioId: idDomain
      },
      include: AplicacaoModel,
      attributes: {exclude: ['senha']}
    });
  }

  findAllAppsByDomainAndApp(idDomain: number) {
    return this.usuarioModel.findAll({
      where: {
        dominioId: idDomain
      },

    });
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioModel.update(updateUsuarioDto, {
      where: { id }
    });
  }

  remove(id: number) {
    return this.usuarioModel.destroy({ where: { id }});
  }
}
