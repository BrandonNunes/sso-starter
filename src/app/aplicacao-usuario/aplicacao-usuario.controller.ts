import {Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus} from '@nestjs/common';
import { AplicacaoUsuarioService } from './aplicacao-usuario.service';
import { CreateAplicacaoUsuarioDto } from './dto/create-aplicacao-usuario.dto';
import { UpdateAplicacaoUsuarioDto } from './dto/update-aplicacao-usuario.dto';
import { Response } from 'express'
import {ApiTags} from "@nestjs/swagger";
import {AplicacaoModel} from "../aplicacao/entities/aplicacao.entity";
import {UsuariosService} from "../usuarios/usuarios.service";
import {AppClienteService} from "../aplicacao/aplicacao.service";

@ApiTags('Aplicação-usuario')
@Controller('aplicacao-usuario')
export class AplicacaoUsuarioController {
  constructor(private readonly aplicacaoUsuarioService: AplicacaoUsuarioService,
              private readonly aplicacaoService: AppClienteService,
              private readonly usuarioService: UsuariosService) {}

  @Post()
  async create(@Res() response: Response, @Body() createAplicacaoUsuarioDto: CreateAplicacaoUsuarioDto) {
    const { aplicacaoId, usuarioId } = createAplicacaoUsuarioDto
    try{
      const existUser = await this.usuarioService.findOne(usuarioId);
      if (!existUser) return response.status(HttpStatus.NOT_FOUND).json({message: 'Usuário não existe'});
      const existApp = await this.aplicacaoService.findOne(aplicacaoId);
      if (!existApp) return response.status(HttpStatus.NOT_FOUND).json({message: 'Aplicação não existe'});
      const existeRelation = await this.aplicacaoUsuarioService.findByRelation(usuarioId, aplicacaoId);
      if (existeRelation) return response.status(HttpStatus.CONFLICT).json({message: 'Usuário já vinculado a esta aplicação.'})
      const newRel = await this.aplicacaoUsuarioService.create(createAplicacaoUsuarioDto);
      return response.json({message: 'Registro criado com sucesso.', registro: {...newRel.dataValues}})
    }catch (erro) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: 'Falha ao executar o processo', erro})
    }
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

  @Delete()
  async remove(@Res() response: Response, @Body() bodyDelete: {aplicacaoId: number, usuarioId: number}) {
    const { aplicacaoId, usuarioId } = bodyDelete;
    try{
      if (!aplicacaoId) return response.status(HttpStatus.BAD_REQUEST).json({message: 'Informe uma aplicação válida.'});
      if (!usuarioId) return response.status(HttpStatus.BAD_REQUEST).json({message: 'Informe um usuario válido.'});
      const validUser = await this.usuarioService.findOne(usuarioId);
      if (!validUser) return response.status(HttpStatus.NOT_FOUND).json({message: 'Usuário não existe'});
      const existApp = await this.aplicacaoService.findOne(aplicacaoId);
      if (!existApp) return response.status(HttpStatus.NOT_FOUND).json({message: 'Aplicação não existe'});
      const existRelation = await this.aplicacaoUsuarioService.findByRelation(usuarioId, aplicacaoId);
      if (!existRelation) return response.status(HttpStatus.CONFLICT).json({message: 'Usuário não vinculado a esta aplicação.'})
      await this.aplicacaoUsuarioService.remove(usuarioId, aplicacaoId);
      return response.json({message: 'Registro removido com sucesso.'});
    }catch (erro) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: 'Falha ao executar o processo', erro})
    }
  }
}
