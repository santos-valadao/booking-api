import { body } from 'express-validator';   

const bookingValidator = [
    body('client').isString().isLength({ min: 3 }),   
    body('hotelName').isString().isLength({ min: 3 }),
    body('arrivalDate').isDate(),      
    body('departureDate').isDate()
]

export default bookingValidator;