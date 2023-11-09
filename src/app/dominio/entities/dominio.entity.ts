import {Table, Column, Model, HasMany, DataType} from "sequelize-typescript";
import {AplicacaoModel} from "../../aplicacao/entities/aplicacao.entity";

@Table({tableName: 'dominio', timestamps: false,  })
export class DominioModel extends Model {
    @Column({primaryKey: true, autoIncrement: true, })
    id: number;

    @Column({type: DataType.STRING,  })
    descricao: string;

    @HasMany(() => AplicacaoModel)
    aplicacoes: AplicacaoModel[]

}
