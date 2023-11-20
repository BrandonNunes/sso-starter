import {Controller, Get, Post, Body, Patch, Param, Delete, Res, Put, HttpStatus} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import {ApiTags} from "@nestjs/swagger";
import {DominioService} from "../dominio/dominio.service";
import {Response} from "express";

@ApiTags('Usuário')
@Controller('usuario')
export class UsuariosController {
  constructor(
      private readonly usuariosService: UsuariosService,
      private readonly dominioService: DominioService,
      ) {}

  @Post()
  async create(@Res() response: Response, @Body() createUsuarioDto: CreateUsuarioDto) {
    try {
      const existDomain = await this.dominioService.findOne(createUsuarioDto.dominioId);
      if (!existDomain) return response.status(HttpStatus.NOT_FOUND).json({message: 'Dominio informado é inválido.'});
      const existEmailInDomain = await this.usuariosService.findOneUserByEmailInDomain(createUsuarioDto.email, createUsuarioDto.dominioId)
      if (existEmailInDomain) return response.status(HttpStatus.BAD_REQUEST).json({message: 'Email ja existe neste dominio.'});
      const newUser = await this.usuariosService.create(createUsuarioDto);
      return response.json({message: 'Registro criado com sucesso.', registro: {...newUser.dataValues}})
    }catch (erro) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: 'Falha ao executar o processo', erro})
    }
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(+id);
  }

  @Get('dominio/:idDominio')
  async findAllByDomain(@Res() response: Response, @Param('idDominio') idDominio: string) {
    try {
      const existDom = await this.dominioService.findOne(+idDominio);
      if (!existDom) return response.status(HttpStatus.NOT_FOUND).json({message: 'Dominio informado não existe.'})
      const apps = await this.usuariosService.findAllAppsByDomain(+idDominio);
      return response.json(apps);
    }catch (erro) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: 'Falha ao executar o processo', erro})
    }
  }

  @Put(':id')
  async update(@Res() response: Response, @Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    try {
      const existUser = await this.usuariosService.findOne(+id);
      if (!existUser) return response.status(HttpStatus.NOT_FOUND).json({message: 'Usuário não existe.'})
      await this.usuariosService.update(+id, updateUsuarioDto);
      return response.status(HttpStatus.ACCEPTED).json({message: 'Registro atualizado com sucesso.', registro: {...updateUsuarioDto}})
    }catch (erro) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: 'Falha ao executar o processo', erro})
    }
  }

  @Delete(':id')
  async remove(@Res() response: Response, @Param('id') id: string) {
    try {
      const existUser = await this.usuariosService.findOne(+id);
      if (!existUser) return response.status(HttpStatus.NOT_FOUND).json({message: 'Usuario não existe.'})
      await this.usuariosService.remove(+id);
      return response.status(HttpStatus.ACCEPTED).json({message: 'Registro removido com sucesso.'})
    }catch (erro) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: 'Falha ao executar o processo', erro})
    }
  }
}
