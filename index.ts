import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import router from './routes/index.route';
import { errorHandler } from './middlewares/errHandler.middleware';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/api/v1', router);
app.use(errorHandler);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    message: 'hello from e-commerce api',
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app