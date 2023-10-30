import {Table, Column, Model, HasMany, ForeignKey, BelongsTo} from "sequelize-typescript";
import {DominioModel} from "../../dominio/entities/dominio.entity";
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

}
