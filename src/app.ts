import cors from 'cors';

import express, { Application, NextFunction, Request, Response } from 'express';

const app = express()
// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app;