import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioPermissaoService } from './usuario-permissao.service';
import { CreateUsuarioPermissaoDto } from './dto/create-usuario-permissao.dto';
import { UpdateUsuarioPermissaoDto } from './dto/update-usuario-permissao.dto';

@Controller('usuario-permissao')
export class UsuarioPermissaoController {
  constructor(private readonly usuarioPermissaoService: UsuarioPermissaoService) {}

  @Post()
  create(@Body() createUsuarioPermissaoDto: CreateUsuarioPermissaoDto) {
    return this.usuarioPermissaoService.create(createUsuarioPermissaoDto);
  }

  @Get()
  findAll() {
    return this.usuarioPermissaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioPermissaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioPermissaoDto: UpdateUsuarioPermissaoDto) {
    return this.usuarioPermissaoService.update(+id, updateUsuarioPermissaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioPermissaoService.remove(+id);
  }
}
