import { PartialType } from '@nestjs/mapped-types';
import { CreateAplicacaoUsuarioDto } from './create-aplicacao-usuario.dto';

export class UpdateAplicacaoUsuarioDto extends PartialType(CreateAplicacaoUsuarioDto) {}
