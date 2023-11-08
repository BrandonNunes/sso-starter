import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GrupoPermService } from './grupo-perm.service';
import { CreateGrupoPermDto } from './dto/create-grupo-perm.dto';
import { UpdateGrupoPermDto } from './dto/update-grupo-perm.dto';

@Controller('grupo-perm')
export class GrupoPermController {
  constructor(private readonly grupoPermService: GrupoPermService) {}

  @Post()
  create(@Body() createGrupoPermDto: CreateGrupoPermDto) {
    return this.grupoPermService.create(createGrupoPermDto);
  }

  @Get()
  findAll() {
    return this.grupoPermService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.grupoPermService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGrupoPermDto: UpdateGrupoPermDto) {
    return this.grupoPermService.update(+id, updateGrupoPermDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.grupoPermService.remove(+id);
  }
}
