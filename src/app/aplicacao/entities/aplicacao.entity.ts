import {Table, Column, Model, ForeignKey, BelongsTo, DataType, BelongsToMany} from "sequelize-typescript";
import {DominioModel} from "../../dominio/entities/dominio.entity";
import {UsuarioModel} from "../../usuarios/entities/usuario.entity";
import {AplicacaoUsuarioModel} from "../../aplicacao-usuario/entities/aplicacao-usuario.entity";
import {LicencaModel} from "../../licenca/entities/licenca.entity";

@Table({tableName: 'aplicacao', timestamps: false})
export class AplicacaoModel extends Model{

    @Column({autoIncrement: true, primaryKey: true,})
    id: number;

    @Column({ allowNull: false })
    nomeApp: string;

    @Column({defaultValue: false})
    ativo: boolean;

    @Column({type: DataType.BLOB})
    logo: string;

    @ForeignKey(() => DominioModel)
    @Column({ allowNull: false })
    dominioId: number;

    @ForeignKey(() => LicencaModel)
    @Column({allowNull: true})
    licencaId: number;

    //Relations
    @BelongsTo(() => DominioModel)
    dominio: DominioModel

    @BelongsToMany(() => UsuarioModel, () => AplicacaoUsuarioModel)
    usuarios: UsuarioModel[]
}
