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
      const { name, sex } = req.query as { name?: string; sex?: string };

      const clients = await this.clientService.getClients({ name, sex });

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

  findByName = async (req: Request, res: Response) => {
    try {
      const name = req.query.name as string;
      const clients = await this.clientService.getClientByName(name);

      return res.status(201).json({
        status: 'Success',
        data: clients,
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

  findBySex = async (req: Request, res: Response) => {
    try {
      const sex = req.query.sex as string;
      const clients = await this.clientService.getClientBySex(sex);

      return res.status(201).json({
        status: 'Success',
        data: clients,
      });
    } catch (error: any) {
      return res.status(400).json({
        status: 'Error',
        message: error.message || 'Error ao encontrar clientes',
      });
    }
  };

  findByTel = async (req: Request, res: Response) => {
    try {
      const { tel } = req.params;
      const client = await this.clientService.getClientByTel(tel);

      return res.status(201).json({
        status: 'Succes',
        data: client,
      });
    } catch (error: any) {
      return res.status(400).json({
        status: 'Error',
        message: error.message || 'Erro ao encontrar cliente',
      });
    }
  };

  findByEmail = async (req: Request, res: Response) => {
    try {
      const { email } = req.params;
      const client = await this.clientService.getClientByEmail(email);

      return res.status(201).json({
        status: 'Success',
        data: client,
      });
    } catch (error: any) {
      return res.status(400).json({
        status: 'Error',
        message: error.message || 'Erro ao encontrar cliente',
      });
    }
  };
}
