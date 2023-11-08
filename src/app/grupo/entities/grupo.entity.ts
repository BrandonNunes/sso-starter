import {Table, Column, Model, HasMany, ForeignKey, BelongsTo, BelongsToMany} from "sequelize-typescript";
import {DominioModel} from "../../dominio/entities/dominio.entity";
import {PermissaoModel} from "../../permissoes/entities/permissoes.entity";
import {GrupoPermModel} from "../../grupo-perm/entities/grupo-perm.entity";
@Table({tableName: 'grupos', timestamps: false})
export class GrupoModel extends Model {
    @Column({allowNull: false, primaryKey: true, autoIncrement: true})
    id: number;

    @Column
    descricao: string;

    @ForeignKey(() => DominioModel)
    @Column({allowNull: false})
    dominioId: number

    @BelongsTo(() => DominioModel)
    dominio: DominioModel

    @BelongsToMany(() => PermissaoModel, () => GrupoPermModel)
    permissoes: PermissaoModel[]

}
