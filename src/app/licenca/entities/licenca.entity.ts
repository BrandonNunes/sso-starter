import {Model, Column, DataType, HasMany, Table} from 'sequelize-typescript'
import {AplicacaoModel} from "../../aplicacao/entities/aplicacao.entity";

@Table({tableName: 'licencas', timestamps: false})
export class LicencaModel extends Model {

    @Column({allowNull: false, primaryKey: true, autoIncrement: true})
    id: number;

    @Column({allowNull: false})
    descricao: string;

    @Column({defaultValue: true})
    ativo: boolean;

    @Column({ type: DataType.DATE })
    validade: Date

    @Column({type: DataType.NUMBER})
    limite_usuarios_logados: number;

    // Relations
    @HasMany(() => AplicacaoModel)
    aplicacoes: AplicacaoModel[]
}
