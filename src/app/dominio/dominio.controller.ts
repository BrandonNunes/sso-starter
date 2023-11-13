import {Controller, Get, Post, Body, Put, Param, Delete, Res, HttpException, HttpStatus} from '@nestjs/common';
import { DominioService } from './dominio.service';
import { CreateDominioDto } from './dto/create-dominio.dto';
import { UpdateDominioDto } from './dto/update-dominio.dto';
import { Response } from 'express'
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Dominio')
@Controller('dominio')
export class DominioController {
  constructor(private readonly dominioService: DominioService) {}

  @Post()
  async create(@Res() response: Response, @Body() createDominioDto: CreateDominioDto) {
    try {
      const existDesc = await this.dominioService.findOneByDescription(createDominioDto.descricao);
      if (existDesc) return response.status(HttpStatus.CONFLICT).json({message: 'Ja existe um dominio com esta descrição.'});
      const newDom = await this.dominioService.create(createDominioDto);
      return response.json({message: 'Registro criado com sucesso.', registro: {...newDom.dataValues}})
    }catch (erro) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: 'Falha ao executar o processo', erro})
    }

  }

  @Get()
  findAll() {
    return this.dominioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dominioService.findOne(+id);
  }

  @Put(':id')
  async update(@Res() response: Response, @Param('id') id: string, @Body() updateDominioDto: UpdateDominioDto) {
    try {
      const existDom = await this.dominioService.findOne(+id);
      if (!existDom) return response.status(HttpStatus.NOT_FOUND).json({message: 'Dominio não existe.'})
      await this.dominioService.update(+id, updateDominioDto);
      return response.status(HttpStatus.ACCEPTED).json({message: 'Registro atualizado com sucesso.', registro: {...updateDominioDto}})
    }catch (erro) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: 'Falha ao executar o processo', erro})
    }
  }

  @Delete(':id')
  async remove(@Res() response: Response,@Param('id') id: string) {
    try {
      const existDom = await this.dominioService.findOne(+id);
      if (!existDom) return response.status(HttpStatus.NOT_FOUND).json({message: 'Dominio não existe.'})
      await this.dominioService.remove(+id);
      return response.status(HttpStatus.ACCEPTED).json({message: 'Registro removido com sucesso.'})
    }catch (erro) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: 'Falha ao executar o processo', erro})
    }
  }
}
