import express, { Application, NextFunction, Request, Response, urlencoded } from 'express';
import cors from 'cors';
import globalErrorHandler from './middleware/globalErrorHandler';
import router from './app/routes';
import httpStatus from 'http-status';
const app: Application = express();

// middleware
app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))

// application router
app.use('/api/v1', router);


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.use(globalErrorHandler);

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app
