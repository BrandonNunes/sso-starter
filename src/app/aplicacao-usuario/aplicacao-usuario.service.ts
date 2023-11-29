import { Injectable } from '@nestjs/common';
import { CreateAplicacaoUsuarioDto } from './dto/create-aplicacao-usuario.dto';
import { UpdateAplicacaoUsuarioDto } from './dto/update-aplicacao-usuario.dto';
import {InjectModel} from "@nestjs/sequelize";
import {AplicacaoUsuarioModel} from "./entities/aplicacao-usuario.entity";

@Injectable()
export class AplicacaoUsuarioService {

  constructor(
      @InjectModel(AplicacaoUsuarioModel) private aplicacaoUsuarioModel: typeof AplicacaoUsuarioModel
  ) {
  }
  create(createAplicacaoUsuarioDto: CreateAplicacaoUsuarioDto) {
    return this.aplicacaoUsuarioModel.create({...createAplicacaoUsuarioDto});
  }

  findAll() {
    return this.aplicacaoUsuarioModel.findAll();
  }

  findByRelation(usuarioId: number, aplicacaoId: number) {
    return this.aplicacaoUsuarioModel.findOne({
      where: {
        usuarioId,
        aplicacaoId
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} aplicacaoUsuario`;
  }

  update(id: number, updateAplicacaoUsuarioDto: UpdateAplicacaoUsuarioDto) {
    return `This action updates a #${id} aplicacaoUsuario`;
  }

  remove(usuarioId: number, aplicacaoId: number) {
    return this.aplicacaoUsuarioModel.destroy({
      where: {
        usuarioId, aplicacaoId
      }
    });
  }
}
