import {Table, Column, Model, HasMany, ForeignKey, BelongsTo, BelongsToMany} from "sequelize-typescript";
import {DominioModel} from "../../dominio/entities/dominio.entity";
import {PermissaoModel} from "../../permissoes/entities/permissoes.entity";
import {GrupoPermModel} from "../../grupo-perm/entities/grupo-perm.entity";
import {UsuarioModel} from "../../usuarios/entities/usuario.entity";
import {GrupoUsuarioModel} from "../../grupo-usuario/entities/grupo-usuario.entity";
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

    @BelongsToMany(() => UsuarioModel, () => GrupoUsuarioModel)
    usuarios: UsuarioModel[]

}
