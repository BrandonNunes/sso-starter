import {IsNotEmpty} from 'class-validator'
export class CreateAplicacaoUsuarioDto {

    @IsNotEmpty({message: 'Um usuario deve ser informado.'})
    usuarioId: number;

    @IsNotEmpty({message: 'Uma aplicação deve ser informada.'})
    aplicacaoId: number;
}
