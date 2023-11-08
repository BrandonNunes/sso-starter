import {Table, Column, Model, HasMany, ForeignKey, BelongsTo} from "sequelize-typescript";
import {DominioModel} from "../../dominio/entities/dominio.entity";
import {GrupoModel} from "../../grupo/entities/grupo.entity";
import {PermissaoModel} from "../../permissoes/entities/permissoes.entity";

@Table({tableName: 'grupo_permissao', timestamps: false})
export class GrupoPermModel extends Model{

    @Column({autoIncrement: true, unique: true, primaryKey: true})
    id: number;

    @ForeignKey(() => GrupoModel)
    @Column({allowNull: false})
    grupoId: number

    @ForeignKey(() => PermissaoModel)
    @Column({allowNull: false})
    permissaoId: number
}
