import {
    Table,
    Column,
    Model,
    HasMany,
    ForeignKey,
    BelongsTo,
    BelongsToMany,
    BeforeCreate,
    BeforeUpdate
} from "sequelize-typescript";
import {DominioModel} from "../../dominio/entities/dominio.entity";
import {GrupoModel} from "../../grupo/entities/grupo.entity";
import {PermissaoModel} from "../../permissoes/entities/permissoes.entity";
import {AplicacaoModel} from "../../aplicacao/entities/aplicacao.entity";
import {GrupoUsuarioModel} from "../../grupo-usuario/entities/grupo-usuario.entity";
import {UsuarioPermissaoModel} from "../../usuario-permissao/entities/usuario-permissao.entity";
import {AplicacaoUsuarioModel} from "../../aplicacao-usuario/entities/aplicacao-usuario.entity";
import { genSalt, hash } from "bcrypt";

@Table({tableName: 'usuarios', timestamps: false})
export class UsuarioModel extends Model {

    @Column({primaryKey: true, autoIncrement: true})
    id: number

    @Column({allowNull: false})
    nome: string

    @Column({allowNull: false})
    email: string

    @Column({allowNull: false})
    senha: string

    @ForeignKey(() => DominioModel)
    @Column
    dominioId: number;

    @Column({defaultValue: false, field: 'isAdmin'})
    admin: boolean;

    // @Column({defaultValue: false}
    // ativo: boolean;

    @BelongsTo(() => DominioModel)
    dominio: DominioModel

    @BelongsToMany(() => GrupoModel, () => GrupoUsuarioModel)
    grupos: GrupoModel[]

    @BelongsToMany(() => PermissaoModel, () => UsuarioPermissaoModel)
    permissoes: PermissaoModel[]

    @BelongsToMany(() => AplicacaoModel, () => AplicacaoUsuarioModel)
    aplicacoes: AplicacaoModel[]


    @BeforeCreate
    static async genHashPass(userProps: UsuarioModel) {
        const salt = await genSalt(10);
        const genHash = await hash(userProps.senha, salt);
        userProps.senha = genHash;
    }
    @BeforeUpdate
    static async updateGenHashPass(userProps: UsuarioModel) {
        if (userProps.senha) {
            const salt = await genSalt(10);
            const genHash = await hash(userProps.senha, salt);
            userProps.senha = genHash;
        }
    }
}
