import { validationResult } from "express-validator";

var id = 1;

const BOOKINGS = [
    {
        id,
        client: 'John Doe',
        hotelName: 'Hilton',
        arrivalDate: '2021-01-01',
        departureDate: '2021-01-10'    
    }
];

export const getBookings = (req, res) => {
    res.status(200).json(BOOKINGS);
};

export const createBooking = (req, res) => {
    const errors = validationResult(req);

    if(errors.isEmpty()){        
        const booking = req.body;
        booking.id = ++id;
        
        BOOKINGS.push(booking);
        
        res.status(201).json(booking);
    } else {
        res.status(422).json(errors);
    }
};