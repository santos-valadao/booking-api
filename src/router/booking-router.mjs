import express from 'express';
import * as bookingController from '../controller/booking-controller.mjs';
import bookingValidator from '../validator/booking-validator.mjs';  

const router = express.Router();

router.get('/', bookingController.getBookings);
router.post('/', bookingValidator, bookingController.createBooking);

export default router;