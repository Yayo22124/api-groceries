//En este archivo se va a establecer todo la configuración del servidor.

import {config} from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import productsRouter from './routes/products.routes.js';

config();
const app=express();

//Settings
app.set('view engine','ejs');
//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(productsRouter);

export default app;
