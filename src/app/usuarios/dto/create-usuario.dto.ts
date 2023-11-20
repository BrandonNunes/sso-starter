import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUsuarioDto {

    @ApiProperty({description: 'Nome para do usuario.', example: 'Jonas abraão'})
    @IsNotEmpty({message: 'Nome de usuario é obrigatório'})
    nome: string

    @ApiProperty()
    @IsNotEmpty({message: 'email é obrigatório'})
    @IsEmail({}, {message: 'Formato de email inválido.'})
    email: string

    @ApiProperty()
    @IsNotEmpty({message: 'senha é obrigatório'})
    senha: string

    @ApiProperty()
    @IsNotEmpty({message: 'dominio é obrigatório'})
    dominioId: number;

    @ApiProperty()
    @IsOptional()
    admin: boolean;

    // @ApiProperty()
    // ativo: boolean;
}
