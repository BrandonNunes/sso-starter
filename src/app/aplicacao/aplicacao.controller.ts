import {Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Put, Query} from '@nestjs/common';
import { AppClienteService } from './aplicacao.service';
import { CreateAppClienteDto } from './dto/create-app_cliente.dto';
import { UpdateAppClienteDto } from './dto/update-app_cliente.dto';
import {ApiTags} from "@nestjs/swagger";
import {Response} from "express";
import {DominioService} from "../dominio/dominio.service";

@ApiTags('Aplicação')
@Controller('aplicacao')
export class AppClienteController {
  constructor(
      private readonly appClienteService: AppClienteService,
      private readonly dominioService: DominioService) {}

  @Post()
  async create(@Res() response: Response, @Body() createAppClienteDto: CreateAppClienteDto) {
    try {
      const existDesc = await this.appClienteService.findOneByDesc(createAppClienteDto.nomeApp);
      if (existDesc) return response.status(HttpStatus.CONFLICT).json({message: 'Ja existe uma aplicação com esta descrição.'});
      const existDomain = await this.dominioService.findOne(createAppClienteDto.dominioId);
      if (!existDomain) return response.status(HttpStatus.NOT_FOUND).json({message: 'Dominio informado é inválido.'});
      const newApp = await this.appClienteService.create(createAppClienteDto);
      return response.json({message: 'Registro criado com sucesso.', registro: {...newApp.dataValues}})
    }catch (erro) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: 'Falha ao executar o processo', erro})
    }
  }

  @Get('dominio/:idDominio')
  async findAllByDomain(@Res() response: Response, @Param('idDominio') idDominio: string) {
    try {
      const existDom = await this.dominioService.findOne(+idDominio);
      if (!existDom) return response.status(HttpStatus.NOT_FOUND).json({message: 'Dominio informado não existe.'})
      const apps = await this.appClienteService.findAllAppsByDomain(+idDominio);
      return response.json(apps);
    }catch (erro) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: 'Falha ao executar o processo', erro})
    }
  }

  @Get()
  async findAll() {
    const apps = await this.appClienteService.findAll();
    const formatApps = apps.map((app) => {
      if (app.logo) {
        return {
          ...app,
          logo: app.logo.toString()
        }
      }
      return {
        ...app
      }
    })
    return formatApps;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const app = await this.appClienteService.findOne(+id);
    if (app.logo) app.logo = app.logo.toString();
    return app;
  }

  @Put(':id')
  async update(@Res() response: Response, @Param('id') id: string, @Body() updateAppClienteDto: UpdateAppClienteDto) {
    try {
      const existApp = await this.appClienteService.findOne(+id);
      if (!existApp) return response.status(HttpStatus.NOT_FOUND).json({message: 'Aplicação não existe.'})
      await this.appClienteService.update(+id, updateAppClienteDto);
      return response.status(HttpStatus.ACCEPTED).json({message: 'Registro atualizado com sucesso.', registro: {...updateAppClienteDto}})
    }catch (erro) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: 'Falha ao executar o processo', erro})
    }
  }

  @Delete(':id')
  async remove(@Res() response: Response, @Param('id') id: string) {
    try {
      const existApp = await this.appClienteService.findOne(+id);
      if (!existApp) return response.status(HttpStatus.NOT_FOUND).json({message: 'Aplicação não existe.'})
      await this.appClienteService.remove(+id);
      return response.status(HttpStatus.ACCEPTED).json({message: 'Registro removido com sucesso.'})
    }catch (erro) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: 'Falha ao executar o processo', erro})
    }
  }
}
