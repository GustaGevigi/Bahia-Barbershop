import { UserModel } from '../users/users.model';
import { ClientModel } from './clients.model';

import sequelize from '../../shared/config/sequelize';
import { Op, WhereOptions } from 'sequelize';

interface CreateClientDTO {
  name: string;
  cpf: string;
  sex: string;
  tel: string;
  emailPer: string;
  password: string;
  avatarUrl: string;
}

interface GetClientsFilters {
  name?: string;
  sex?: string;
  tel?: string;
  email?: string;
}

export class ClientService {
  async createClient(data: CreateClientDTO) {
    const t = await sequelize.transaction();

    try {
      const user = await UserModel.create(
        {
          name: data.name,
          cpf: data.cpf,
          sex: data.sex,
        },
        { transaction: t },
      );

      const client = await ClientModel.create(
        {
          userId: user.id,
          tel: data.tel,
          emailPer: data.emailPer,
          password: data.password,
          avatarUrl: data.avatarUrl,
        },
        { transaction: t },
      );

      await t.commit();
      return client;
    } catch (error) {
      await t.rollback();
      throw error;
    }
  }

  async getClients(filters: GetClientsFilters) {
    const userWhere: WhereOptions = {};

    if (filters.name) {
      userWhere.name = { [Op.like]: `%${filters.name}%` };
    }

    if (filters.sex) {
      userWhere.sex = filters.sex;
    }

    if (filters.tel) {
      userWhere.tel = filters.tel;
    }

    if (filters.email) {
      userWhere.email = filters.email;
    }

    return ClientModel.findAll({
      include: [
        {
          model: UserModel,
          as: 'user',
          where: Object.keys(userWhere).length > 0 ? userWhere : undefined,
        },
      ],
    });
  }

  async getClientById(id: number) {
    return await ClientModel.findByPk(id, {
      include: [{ model: UserModel, as: 'user' }],
    });
  }

  async getClientByCpf(cpf: string) {
    return await ClientModel.findOne({
      include: [
        {
          model: UserModel,
          as: 'user',
          where: { cpf },
        },
      ],
    });
  }
}
