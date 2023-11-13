import {IsBoolean, IsNotEmpty, IsOptional, MaxLength} from "class-validator"


export class CreateAppClienteDto {

    @IsNotEmpty({message: 'Um nome para a aplicação deve ser informado'})
    @MaxLength(50, {message: 'Nome da aplicação muito grande'})
    nomeApp: string;

    @IsOptional()
    @IsBoolean({message: 'O valor para o campo "ativo" deve ser um booleano.'})
    ativo: boolean;

    @IsOptional()
    logo: string;

    @IsNotEmpty({message: 'Um Dominio deve ser informado para esta aplicação'})
    dominioId: number;

    @IsOptional()
    licencaId: number;
}
