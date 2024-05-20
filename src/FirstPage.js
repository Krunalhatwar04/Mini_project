import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import EditUserForm from './EditUserForm';
import { GET_USER } from './constrain/ApiConstrain';
import Adminnav from './adminnav';
import AdminNavBar from './AdminNavBar';

function FirstPage() {
  const [userData, setUserData] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const reqData = await fetch(GET_USER);
        const resData = await reqData.json();
        setUserData(resData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to fetch user data");
        setIsLoading(false);
      }
    };
    getUserData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:6800/deleteuser`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        setUserData(userData.filter(user => user.id !== id));
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const confirmDelete = (id, username) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: `Are you sure you want to delete user: ${username}?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => handleDelete(id)
        },
        {
          label: 'No',
          onClick: () => console.log('Delete cancelled')
        }
      ],
      closeOnEscape: true,
      closeOnClickOutside: true,
    });
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleSave = (updatedUser) => {
    setUserData(userData.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
  };

  const handleCancel = () => {
    setEditingUser(null);
  };

  return (
    <><AdminNavBar /><div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <br></br>
          <h4 className='mt-2' style={{textAlign:'center'}}>User Data</h4>
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-danger">{error}</p>
          ) : (
            editingUser ? (
              <EditUserForm user={editingUser} onSave={handleSave} onCancel={handleCancel} />
            ) : (
              <Table striped bordered hover className='mt-3'>
                <thead>
                  <tr>
                    <th>Sr.No</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Contact No</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((user, index) => (
                    <tr key={user.id}>
                      <td>{index + 1}</td>
                      <td>{user.id}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.city}</td>
                      <td>{user.contact_no}</td>
                      <td>
                        <button className="btn btn-success btn-sm me-2" onClick={() => handleEdit(user)}>Edit</button>
                        <button className="btn btn-danger btn-sm" onClick={() => confirmDelete(user.id, user.username)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )
          )}
        </div>
      </div>
    </div></>
  );
}

export default FirstPage;
