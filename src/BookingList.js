import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Container } from 'react-bootstrap';
import { API_BASE_URL } from './constrain/ApiConstrain';
const GET_BOOKINGS_API_ROUTE = `${API_BASE_URL}/servicecenters/bookingview`;

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get(GET_BOOKINGS_API_ROUTE)
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the bookings!', error);
      });
  }, []);

  return (
    <Container>
      <h2 >All Bookings</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Date</th>
            <th>Brand</th>
            <th>Service</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.name}</td>
              <td>{booking.address}</td>
              <td>{booking.date}</td>
              <td>{booking.brand}</td>
              <td>{booking.service}</td>
              <td>{booking.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default BookingList;
