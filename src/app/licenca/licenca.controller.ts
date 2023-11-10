import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LicencaService } from './licenca.service';
import { CreateLicencaDto } from './dto/create-licenca.dto';
import { UpdateLicencaDto } from './dto/update-licenca.dto';

@Controller('licenca')
export class LicencaController {
  constructor(private readonly licencaService: LicencaService) {}

  @Post()
  create(@Body() createLicencaDto: CreateLicencaDto) {
    return this.licencaService.create(createLicencaDto);
  }

  @Get()
  findAll() {
    return this.licencaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.licencaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLicencaDto: UpdateLicencaDto) {
    return this.licencaService.update(+id, updateLicencaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.licencaService.remove(+id);
  }
}
