import {Table, Column, Model, ForeignKey, BelongsTo, DataType, BelongsToMany, BeforeFind} from "sequelize-typescript";
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

    @Column({defaultValue: true})
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

    @BeforeFind
    static formatLogo(app: AplicacaoModel) {
        if (app.logo) {
            app.logo = app.logo.toString();
        }else {
            app.logo = "";
        }
    }
}
