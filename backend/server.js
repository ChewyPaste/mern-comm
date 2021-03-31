import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();
// require('./setupProxy');

connectDB();

const app = express();

// app.use('/', proxy);

app.get('/', (req, res) => {
	res.send('API is running');
});

app.use('/api/products', productRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(
	process.env.PORT,
	console.log(`Server running on port ${process.env.PORT}`.yellow.bold)
);
