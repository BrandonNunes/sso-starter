import {IsBoolean, IsNotEmpty, IsOptional, MaxLength} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateDominioDto {

    @ApiProperty({description: 'Nome para o domínio.', example: 'Dominio teste'})
    @IsNotEmpty({message: 'Uma descrição para o dominio deve ser informada'})
    @MaxLength(50, {message: 'Tamanho máximo para o campo descrição foi excedido(50)'})
    descricao: string;

    @ApiProperty({description: 'status de disponibilidade de uso do dominio.'})
    @IsOptional()
    @IsBoolean({message: 'O tipo de dado para o campo "ativo" é inválido.'})
    ativo: boolean;
}
