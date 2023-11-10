import { PartialType } from '@nestjs/swagger';
import { CreateLicencaDto } from './create-licenca.dto';

export class UpdateLicencaDto extends PartialType(CreateLicencaDto) {}
