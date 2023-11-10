import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AplicacaoUsuarioService } from './aplicacao-usuario.service';
import { CreateAplicacaoUsuarioDto } from './dto/create-aplicacao-usuario.dto';
import { UpdateAplicacaoUsuarioDto } from './dto/update-aplicacao-usuario.dto';

@Controller('aplicacao-usuario')
export class AplicacaoUsuarioController {
  constructor(private readonly aplicacaoUsuarioService: AplicacaoUsuarioService) {}

  @Post()
  create(@Body() createAplicacaoUsuarioDto: CreateAplicacaoUsuarioDto) {
    return this.aplicacaoUsuarioService.create(createAplicacaoUsuarioDto);
  }

  @Get()
  findAll() {
    return this.aplicacaoUsuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aplicacaoUsuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAplicacaoUsuarioDto: UpdateAplicacaoUsuarioDto) {
    return this.aplicacaoUsuarioService.update(+id, updateAplicacaoUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aplicacaoUsuarioService.remove(+id);
  }
}
