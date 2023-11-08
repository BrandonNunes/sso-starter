import { Injectable } from '@nestjs/common';
import { CreateGrupoPermDto } from './dto/create-grupo-perm.dto';
import { UpdateGrupoPermDto } from './dto/update-grupo-perm.dto';

@Injectable()
export class GrupoPermService {
  create(createGrupoPermDto: CreateGrupoPermDto) {
    return 'This action adds a new grupoPerm';
  }

  findAll() {
    return `This action returns all grupoPerm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} grupoPerm`;
  }

  update(id: number, updateGrupoPermDto: UpdateGrupoPermDto) {
    return `This action updates a #${id} grupoPerm`;
  }

  remove(id: number) {
    return `This action removes a #${id} grupoPerm`;
  }
}
