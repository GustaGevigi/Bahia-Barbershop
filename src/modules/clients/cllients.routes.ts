import { Router } from 'express';

import { ClientService } from './clients.service';
import { ClientController } from './clients.controller';

const clientRouter = Router();

const clientService = new ClientService();
const clientController = new ClientController(clientService);

clientRouter.post('/', clientController.create);

clientRouter.get('/', clientController.findAll);

clientRouter.get('/:id', clientController.findById);

clientRouter.get('/cpf/:cpf', clientController.findByCpf);

export default clientRouter;
