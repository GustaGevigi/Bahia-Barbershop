import { Request, Response } from 'express';
import { ClientService } from './clients.service';

export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  create = async (req: Request, res: Response) => {
    try {
      const client = await this.clientService.createClient(req.body);

      return res.status(201).json({
        status: 'Success',
        data: client,
      });
    } catch (error: any) {
      return res.status(400).json({
        status: 'Error',
        message: error.message || 'Erro ao criar cliente',
      });
    }
  };

  findAll = async (req: Request, res: Response) => {
    try {
      const { name, sex, tel, email } = req.query as {
        name?: string;
        sex?: string;
        tel?: string;
        email?: string;
      };

      const clients = await this.clientService.getClients({
        name,
        sex,
        tel,
        email,
      });

      return res.status(200).json({
        status: 'Success',
        data: clients,
      });
    } catch (error: any) {
      return res.status(400).json({
        status: 'Error',
        message: error.message || 'Erro ao encontrar clientes',
      });
    }
  };

  findById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const client = await this.clientService.getClientById(Number(id));

      return res.status(201).json({
        status: 'Success',
        data: client,
      });
    } catch (error: any) {
      return res.status(400).json({
        status: 'Error',
        message: error.message || 'Error ao encontrar cliente',
      });
    }
  };

  findByCpf = async (req: Request, res: Response) => {
    try {
      const { cpf } = req.params;
      const client = await this.clientService.getClientByCpf(cpf);

      return res.status(201).json({
        status: 'Success',
        data: client,
      });
    } catch (error: any) {
      return res.status(400).json({
        status: 'Error',
        message: error.message || 'Error ao encontrar cliente',
      });
    }
  };
}
