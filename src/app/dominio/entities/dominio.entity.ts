import {Table, Column, Model, HasMany, DataType} from "sequelize-typescript";
import {AppClienteModel} from "../../app_cliente/entities/app_cliente.entity";

@Table({tableName: 'dominio', timestamps: false})
export class DominioModel extends Model {
    @Column({primaryKey: true, autoIncrement: true, })
    id: number;

    @Column({type: DataType.STRING, })
    descricao: string;

    @HasMany(() => AppClienteModel)
    aplicacoes: AppClienteModel[]

}
