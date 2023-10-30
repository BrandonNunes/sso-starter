import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppClienteService } from './app_cliente.service';
import { CreateAppClienteDto } from './dto/create-app_cliente.dto';
import { UpdateAppClienteDto } from './dto/update-app_cliente.dto';

@Controller('app-cliente')
export class AppClienteController {
  constructor(private readonly appClienteService: AppClienteService) {}

  @Post()
  create(@Body() createAppClienteDto: CreateAppClienteDto) {
    return this.appClienteService.create(createAppClienteDto);
  }

  @Get()
  findAll() {
    return this.appClienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appClienteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppClienteDto: UpdateAppClienteDto) {
    return this.appClienteService.update(+id, updateAppClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appClienteService.remove(+id);
  }
}
