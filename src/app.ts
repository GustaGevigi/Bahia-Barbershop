//Imports
import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerSpecs from './shared/config/swagger';

//Routes
import clientRouter from './modules/clients/cllients.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use('/clients', clientRouter);

export default app;
