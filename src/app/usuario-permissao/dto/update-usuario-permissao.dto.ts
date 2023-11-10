import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioPermissaoDto } from './create-usuario-permissao.dto';

export class UpdateUsuarioPermissaoDto extends PartialType(CreateUsuarioPermissaoDto) {}
