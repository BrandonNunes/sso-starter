import {Table, Column, Model, HasMany, ForeignKey, BelongsTo, BelongsToMany} from "sequelize-typescript";
import {UsuarioModel} from "../../usuarios/entities/usuario.entity";
import {AplicacaoModel} from "../../aplicacao/entities/aplicacao.entity";

@Table({tableName: 'aplicacao_usuario', timestamps: false})
export class AplicacaoUsuarioModel extends Model{
    @Column({autoIncrement: true, unique: true, primaryKey: true})
    id: number;

    @ForeignKey(() => UsuarioModel)
    @Column({allowNull: false})
    usuarioId: number

    @ForeignKey(() => AplicacaoModel)
    @Column({allowNull: false})
    aplicacaoId: number
}
