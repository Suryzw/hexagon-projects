import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Table, Button } from 'react-bootstrap';
import AdminInfo from '../../components/adminComp/AdminInfo';
import AdminNavigation from '../../components/adminComp/AdminNavigation';

function AdminRecruitmentData(){
    const [recruitmentData, setRecruitmentData] = useState([]);
      
    useEffect(() => {
        // Ambil data dari server saat komponen dimuat
        fetchData();
    }, []);
      
    const fetchData = async () => {
        try {
            // Ganti URL dengan endpoint API Anda
        const responseRecruitment = await fetch('http://localhost:8081/admin/db_recruitment');
    
        const responseDataRecruitment = await responseRecruitment.json();
      
        // Set data ke state
        setRecruitmentData(responseDataRecruitment);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDelete = async (idPeserta) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
          try {
            // Make a DELETE request to the server to delete the user
            const response = await fetch(`http://localhost:8081/admin/db_recruitment/${idPeserta}`, {
              method: 'DELETE',
            });
      
            if (response.ok) {
              // If the deletion is successful, update the state to reflect the changes
              setRecruitmentData((prevData) => prevData.filter((item) => item.id_peserta !== idPeserta));
              alert(`User with ID ${idPeserta} deleted successfully`);
            } else {
              alert('Error deleting user:', response.statusText);
            }
          } catch (error) {
            alert('Error deleting user:', error);
          }
        }
      };
    
      const handleStatus = async (idPeserta, status) => {
        try {
          // Make a PUT request to update the status
          const response = await fetch(`http://localhost:8081/admin/db_recruitment/${idPeserta}/${status}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (response.ok) {
            // If the update is successful, update the state to reflect the changes
            setRecruitmentData((prevData) =>
            prevData.map((item) =>
                item.id_peserta === idPeserta ? { ...item, status: status } : item
            )
            );
            alert(`Status updated successfully for user with ID ${idPeserta}`);
            fetchData();
          } else {
            alert('Error updating stat:', response.statusText);
          }
        } catch (error) {
          alert('Error updating status:', error);
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
            </Row>
            <Row>
            <Col md={{offset:0}}>
                    <Row className='d-flex'>
                        <Col>
                            <h1>Data Recruitment</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>ID Peserta</th>
                                    <th>ID User</th>
                                    <th>Nama</th>
                                    <th>Email</th>
                                    <th>Pendidikan</th>
                                    <th>Pengalaman</th>
                                    <th>Skill</th>
                                    <th>Alasan</th>
                                    <th>Telepon</th>
                                    <th>Tujuan</th>
                                    <th>Tanggal</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {recruitmentData.map((item) => (
                                    <tr key={item.id_user}>
                                    <td>{item.id_peserta}</td>
                                    <td>{item.id_user}</td>
                                    <td>{item.nama}</td>
                                    <td>{item.email}</td>
                                    <td>{item.pendidikan}</td>
                                    <td>{item.pengalaman}</td>
                                    <td>{item.skill}</td>
                                    <td>{item.alasan}</td>
                                    <td>{item.telp}</td>
                                    <td>{item.tujuan}</td>
                                    <td>{item.tanggal}</td>
                                    <td>{item.status}</td>
                                    <td>
                                        <Button variant='danger'onClick={() => handleDelete(item.id_peserta)}>Delete</Button><span> </span>
                                        <Button variant='success' onClick={() => handleStatus(item.id_peserta, item.status)}>Set Status</Button>
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
}


export default AdminRecruitmentData;

