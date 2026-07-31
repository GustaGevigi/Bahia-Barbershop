import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  Transaction,
} from 'sequelize';

import sequelize from '../../shared/config/sequelize';

export class ClientModel extends Model<
  InferAttributes<ClientModel>,
  InferCreationAttributes<ClientModel>
> {
  declare id: CreationOptional<number>;
  declare userId: number;
  declare tel: string;
  declare emailPer: string;
  declare password: string;
  declare avatarUrl: string;
}

ClientModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    tel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emailPer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
    avatarUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { sequelize, tableName: 'Clients', timestamps: true, underscored: true },
);
