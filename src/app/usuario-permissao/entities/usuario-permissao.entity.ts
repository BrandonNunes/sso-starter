import {Table, Column, Model, HasMany, ForeignKey, BelongsTo} from "sequelize-typescript";
import {GrupoModel} from "../../grupo/entities/grupo.entity";
import {UsuarioModel} from "../../usuarios/entities/usuario.entity";
import {PermissaoModel} from "../../permissoes/entities/permissoes.entity";

@Table({tableName: 'usuario_permissao', timestamps: false})
export class UsuarioPermissaoModel extends Model{
    @Column({autoIncrement: true, unique: true, primaryKey: true})
    id: number;

    @ForeignKey(() => UsuarioModel)
    @Column({allowNull: false})
    usuarioId: number

    @ForeignKey(() => PermissaoModel)
    @Column({allowNull: false})
    permissaoId: number
}
