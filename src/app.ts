import express, { Request, Response } from 'express';
import ErrorHandler from './middlewares/ErrorHandler';
import routes from './routes';

const app = express();
const port = 3000;

app.use(express.json())
app.use('/api', routes);

app.use(ErrorHandler)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

export default app;