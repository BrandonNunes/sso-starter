import { Injectable } from '@nestjs/common';
import { CreateDominioDto } from './dto/create-dominio.dto';
import { UpdateDominioDto } from './dto/update-dominio.dto';

@Injectable()
export class DominioService {
  create(createDominioDto: CreateDominioDto) {
    return 'This action adds a new dominio';
  }

  findAll() {
    return `This action returns all dominio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dominio`;
  }

  update(id: number, updateDominioDto: UpdateDominioDto) {
    return `This action updates a #${id} dominio`;
  }

  remove(id: number) {
    return `This action removes a #${id} dominio`;
  }
}
