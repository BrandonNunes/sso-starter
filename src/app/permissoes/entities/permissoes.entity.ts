import {Table, Column, Model, HasMany, ForeignKey, BelongsTo} from "sequelize-typescript";
import {DominioModel} from "../../dominio/entities/dominio.entity";

@Table({tableName: 'permissoes', timestamps: false})
export class PermissaoModel extends Model{
    @Column({autoIncrement: true})
    id: number;

    @Column({allowNull: false, unique: true, primaryKey: true})
    permissao: string;

    @ForeignKey(() => DominioModel)
    @Column
    dominioId: number;

}
