# booking-api

## Terminology

A booking is when a guest selects a start and end date and submits a reservation on a
property.
A block is when the property owner or manager selects a range of days during which no
guest can make a booking (e.g. the owner wants to use the property for themselves, or the
property manager needs to schedule the repainting of a few rooms).

## System Requirements
- Creata a booking.
- Update a booking dates and guest details.
- Cancel a booking.
- Delete a booking.
- Get a booking.
- Create a block.
- Update a block.
- Delete a block.

Implement proper validation to ensure data integrity. Provide logic to prevent bookings from
overlapping (in terms of dates and property) with non-canceled bookings or blocks.

## Running the Project
```bash
npm run serve
```

## Running the Unit Test
```bash
npm test
```

## Checking the app
http://localhost:3000