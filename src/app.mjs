import express from 'express';
import bookingRouter from './router/booking-router.mjs';
import index from './router/index.mjs';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', index);
app.use('/bookings', bookingRouter);

export default app;