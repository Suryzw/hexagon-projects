import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Table, Button } from 'react-bootstrap';
import AdminInfo from '../../components/adminComp/AdminInfo';
import AdminNavigation from '../../components/adminComp/AdminNavigation';

function AdminCompanyData(){
    const [companyData, setCompanyData] = useState([]);
      
    useEffect(() => {
        // Ambil data dari server saat komponen dimuat
        fetchData();
    }, []);
      
    const fetchData = async () => {
        try {
            // Ganti URL dengan endpoint API Anda
        const responseCompany = await fetch('http://localhost:8081/admin/db_ptpln');
    
        const responseDataCompany = await responseCompany.json();
      
        // Set data ke state
        setCompanyData(responseDataCompany);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleStatus = async (idPTPLN, status) => {
        try {
          // Make a PUT request to update the status
          const response = await fetch(`http://localhost:8081/admin/db_ptpln/${idPTPLN}/${status}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (response.ok) {
            // If the update is successful, update the state to reflect the changes
            setCompanyData((prevData) =>
            prevData.map((item) =>
                item.id_ptpln === idPTPLN ? { ...item, status: status } : item
            )
            );
            alert(`Status updated successfully for user with ID ${idPTPLN}`);
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
                  <Col md={{offset:1}}>
                    <Row className='d-flex'>
                        <Col>
                        <h1>Data PLN</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>No PT PLN</th>
                                    <th>ID PTPLN</th>
                                    <th>Nama Perusahaan</th>
                                    <th>Deskripsi</th>
                                    <th>Tanggal Ujian</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                    {/* Add more columns if needed */}
                                </tr>
                                </thead>
                                <tbody>
                                {companyData.map((item) => (
                                    <tr key={item.no_ptpln}>
                                        <td>{item.no_ptpln}</td>
                                        <td>{item.id_ptpln}</td>
                                        <td>{item.nama_perusahaan}</td>
                                        <td>{item.deskripsi}</td>
                                        <td>{item.tanggal_ujian}</td>
                                        <td>{item.status}</td>
                                        <td>
                                            <Button variant='success'  onClick={() => handleStatus(item.id_ptpln, item.status)}>Set Status</Button>
                                        </td>
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


export default AdminCompanyData;


      