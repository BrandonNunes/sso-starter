import { PartialType } from '@nestjs/mapped-types';
import { CreateAppClienteDto } from './create-app_cliente.dto';

export class UpdateAppClienteDto extends PartialType(CreateAppClienteDto) {}
