import {Table, Column, Model, ForeignKey, BelongsTo, DataType, BelongsToMany} from "sequelize-typescript";
import {DominioModel} from "../../dominio/entities/dominio.entity";
import {UsuarioModel} from "../../usuarios/entities/usuario.entity";
import {AplicacaoUsuarioModel} from "../../aplicacao-usuario/entities/aplicacao-usuario.entity";

@Table({tableName: 'aplicacao', timestamps: false})
export class AplicacaoModel extends Model{

    @Column({autoIncrement: true, primaryKey: true,})
    id: number;

    @Column({ allowNull: false })
    nomeApp: string;

    @ForeignKey(() => DominioModel)
    @Column
    dominioId: number;

    @BelongsTo(() => DominioModel)
    dominio: DominioModel

    @BelongsToMany(() => UsuarioModel, () => AplicacaoUsuarioModel)
    usuarios: UsuarioModel[]
}
