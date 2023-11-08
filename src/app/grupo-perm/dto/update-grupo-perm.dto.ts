import { PartialType } from '@nestjs/mapped-types';
import { CreateGrupoPermDto } from './create-grupo-perm.dto';

export class UpdateGrupoPermDto extends PartialType(CreateGrupoPermDto) {}
