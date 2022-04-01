import { sequelize } from '../database';
import { DataTypes }  from 'sequelize';
import { Model } from 'sequelize';

export interface Shopping extends Model {
    id:number, 
    name: string,
    description: string,
    qty: number,
    purchased: boolean,
    createdAt?: Date;
    updatedAt?: Date;
}
export const ShoppingModel = sequelize.define<Shopping>('Shopping', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    qty: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    purchased: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
});