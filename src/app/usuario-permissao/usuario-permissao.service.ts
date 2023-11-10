import { Injectable } from '@nestjs/common';
import { CreateUsuarioPermissaoDto } from './dto/create-usuario-permissao.dto';
import { UpdateUsuarioPermissaoDto } from './dto/update-usuario-permissao.dto';

@Injectable()
export class UsuarioPermissaoService {
  create(createUsuarioPermissaoDto: CreateUsuarioPermissaoDto) {
    return 'This action adds a new usuarioPermissao';
  }

  findAll() {
    return `This action returns all usuarioPermissao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuarioPermissao`;
  }

  update(id: number, updateUsuarioPermissaoDto: UpdateUsuarioPermissaoDto) {
    return `This action updates a #${id} usuarioPermissao`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuarioPermissao`;
  }
}
