import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DominioService } from './dominio.service';
import { CreateDominioDto } from './dto/create-dominio.dto';
import { UpdateDominioDto } from './dto/update-dominio.dto';

@Controller('dominio')
export class DominioController {
  constructor(private readonly dominioService: DominioService) {}

  @Post()
  create(@Body() createDominioDto: CreateDominioDto) {
    return this.dominioService.create(createDominioDto);
  }

  @Get()
  findAll() {
    return this.dominioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dominioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDominioDto: UpdateDominioDto) {
    return this.dominioService.update(+id, updateDominioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dominioService.remove(+id);
  }
}
