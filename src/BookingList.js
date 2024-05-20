import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Container } from 'react-bootstrap';
import { API_BASE_URL } from './constrain/ApiConstrain';
import AdminNavBar from './AdminNavBar';
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
    <><AdminNavBar /><Container>
        <br></br>
          <h4 style={{textAlign:'center'}}>All Bookings</h4>
          <br></br>
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
                          <td>{booking.service_type}</td>
                          <td>{booking.description}</td>
                      </tr>
                  ))}
              </tbody>
          </Table>
      </Container></>
  );
}

export default BookingList;
