import { Injectable } from '@nestjs/common';
import { CreateAppClienteDto } from './dto/create-app_cliente.dto';
import { UpdateAppClienteDto } from './dto/update-app_cliente.dto';

@Injectable()
export class AppClienteService {
  create(createAppClienteDto: CreateAppClienteDto) {
    return 'This action adds a new appCliente';
  }

  findAll() {
    return `This action returns all appCliente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appCliente`;
  }

  update(id: number, updateAppClienteDto: UpdateAppClienteDto) {
    return `This action updates a #${id} appCliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} appCliente`;
  }
}
