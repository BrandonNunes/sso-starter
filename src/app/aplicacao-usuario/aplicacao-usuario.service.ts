import { Injectable } from '@nestjs/common';
import { CreateAplicacaoUsuarioDto } from './dto/create-aplicacao-usuario.dto';
import { UpdateAplicacaoUsuarioDto } from './dto/update-aplicacao-usuario.dto';

@Injectable()
export class AplicacaoUsuarioService {
  create(createAplicacaoUsuarioDto: CreateAplicacaoUsuarioDto) {
    return 'This action adds a new aplicacaoUsuario';
  }

  findAll() {
    return `This action returns all aplicacaoUsuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aplicacaoUsuario`;
  }

  update(id: number, updateAplicacaoUsuarioDto: UpdateAplicacaoUsuarioDto) {
    return `This action updates a #${id} aplicacaoUsuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} aplicacaoUsuario`;
  }
}
