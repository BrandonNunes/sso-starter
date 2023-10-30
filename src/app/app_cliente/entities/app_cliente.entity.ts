import {Table, Column, Model, ForeignKey, BelongsTo, DataType} from "sequelize-typescript";
import {DominioModel} from "../../dominio/entities/dominio.entity";

@Table({tableName: 'aplicacao', timestamps: false})
export class AppClienteModel extends Model{

    @Column({autoIncrement: true, primaryKey: true,})
    id: number;

    @Column({ allowNull: false })
    nomeApp: string;

    @ForeignKey(() => DominioModel)
    @Column
    dominioId: number;

    @BelongsTo(() => DominioModel)
    dominio: DominioModel
}
