import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Table, Button } from 'react-bootstrap';
import AdminInfo from '../../components/adminComp/AdminInfo';
import AdminNavigation from '../../components/adminComp/AdminNavigation';

function AdminUserData(){
    const [userData, setUserData] = useState([]);
    
    
    useEffect(() => {
      // Ambil data dari server saat komponen dimuat
      fetchData();
    }, []);
    
    const fetchData = async () => { 
      try {
        // Ganti URL dengan endpoint API Anda
        const responseUser = await fetch('http://localhost:8081/admin/db_user_hexagon');

        const responseDataUser = await responseUser.json();
        // Set data ke state
        setUserData(responseDataUser);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const handleEdit = async (userId) => {
      // You can navigate to an edit page or show a modal for editing
      // You can implement this based on your application's design
      console.log(`Editing user with ID: ${userId}`);
    };
    
    const handleDelete = async (userId) => {
      if (window.confirm('Are you sure you want to delete this user?')) {
        try {
          // Make a DELETE request to the server to delete the user
          const response = await fetch(`http://localhost:8081/admin/db_user_hexagon/${userId}`, {
            method: 'DELETE',
          });
    
          if (response.ok) {
            // If the deletion is successful, update the state to reflect the changes
            setUserData((prevData) => prevData.filter((item) => item.id_user !== userId));
            alert(`User with ID ${userId} deleted successfully`);
          } else {
            alert('Error deleting user:', response.statusText);
          }
        } catch (error) {
          alert('Error deleting user:', error);
        }
      }
    };

      return (
        <Container>
          <Row>
              <Col className="p-2 ">
                  <AdminInfo/>
              </Col>
          </Row> 
              <Row className="mt-4">
                  <Col md={{span:2}} className="d-flex justify-content-center align-items-center">
                      <AdminNavigation/>
                  </Col>
                  <Col md={{offset:1}}>
                  <Row className='d-flex'>
                      <Col>
                        <h1>Data User</h1>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>ID User</th>
                              <th>Password</th>
                              <th>Nama</th>
                              <th>Email</th>
                              <th>Telp</th>
                              <th>Action</th>
                              {/* Add more columns if needed */}
                            </tr>
                          </thead>
                          <tbody>
                            {userData.map((item) => (
                              <tr key={item.id_user}>
                                <td>{item.id_user}</td>
                                <td>{item.password}</td>
                                <td>{item.nama}</td>
                                <td>{item.email}</td>
                                <td>{item.telp}</td>
                                <td>
                                  <Button variant='danger' onClick={() => handleDelete(item.id_user)}>Delete</Button>
                                </td>
                                {/* Add more columns if needed */}
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                  </Col>
                </Row>    
        </Container>
      );
};

export default AdminUserData;
