import {Table, Column, Model, HasMany, ForeignKey, BelongsTo, BelongsToMany} from "sequelize-typescript";
import {DominioModel} from "../../dominio/entities/dominio.entity";
import {GrupoPermModel} from "../../grupo-perm/entities/grupo-perm.entity";
import {GrupoModel} from "../../grupo/entities/grupo.entity";

@Table({tableName: 'permissoes', timestamps: false})
export class PermissaoModel extends Model{
    @Column({autoIncrement: true, unique: true, primaryKey: true})
    id: number;

    @Column({allowNull: false, })
    permissao: string;

    @ForeignKey(() => DominioModel)
    @Column({allowNull: false})
    dominioId: number;

    @BelongsTo(() => DominioModel)
    dominio: DominioModel

    @BelongsToMany(() => GrupoModel, () => GrupoPermModel)
    grupos: GrupoModel[]

}
