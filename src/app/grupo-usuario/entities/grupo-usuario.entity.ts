import {Table, Column, Model, HasMany, ForeignKey, BelongsTo} from "sequelize-typescript";
import {GrupoModel} from "../../grupo/entities/grupo.entity";
import {UsuarioModel} from "../../usuarios/entities/usuario.entity";

@Table({tableName: 'grupo_usuario', timestamps: false})
export class GrupoUsuarioModel extends Model {

    @Column({autoIncrement: true, unique: true, primaryKey: true})
    id: number;

    @ForeignKey(() => GrupoModel)
    @Column({allowNull: false})
    grupoId: number

    @ForeignKey(() => UsuarioModel)
    @Column({allowNull: false})
    usuarioId: number
}
