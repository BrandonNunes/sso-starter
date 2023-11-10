import { Injectable } from '@nestjs/common';
import { CreateLicencaDto } from './dto/create-licenca.dto';
import { UpdateLicencaDto } from './dto/update-licenca.dto';

@Injectable()
export class LicencaService {
  create(createLicencaDto: CreateLicencaDto) {
    return 'This action adds a new licenca';
  }

  findAll() {
    return `This action returns all licenca`;
  }

  findOne(id: number) {
    return `This action returns a #${id} licenca`;
  }

  update(id: number, updateLicencaDto: UpdateLicencaDto) {
    return `This action updates a #${id} licenca`;
  }

  remove(id: number) {
    return `This action removes a #${id} licenca`;
  }
}
