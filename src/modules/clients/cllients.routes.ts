import { Router } from 'express';

import { ClientService } from './clients.service';
import { ClientController } from './clients.controller';

const clientRouter = Router();

const clientService = new ClientService();
const clientController = new ClientController(clientService);

clientRouter.post('/', clientController.create);

clientRouter.get('/', clientService.getClients);
