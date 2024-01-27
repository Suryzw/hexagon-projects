import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Accordion, Badge, Button } from "react-bootstrap";
import UserInfo from "../../components/homePage/UserInfo";
import Navigation from "../../components/homePage/Navigation";
import '../../style/Dashboard.css'
import { useUserInput } from "../../UserInputContext";

function Dashboard(){

    const navigate = useNavigate();
    const {userInput} = useUserInput();
    const userid = String(userInput.userId);
    const [userData, setUserData] = useState(false);
    const [perusahaan, setPerusahaan] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8081/check-registration/${userid}`)
        .then(res=>res.json())
        .then(data => {
            setUserData(data.length>0);

            return fetch(`http://localhost:8081/perusahaan/tersedia`);
        })
        .then(secondRes => secondRes.json())
        .then(secondData => {
            setPerusahaan(secondData);
        })
        .catch(err => console.log(err))
    }, [userid]);

    return(
        <Container fluid className="px-5">
           <Row>
                <Col className="p-2 ">
                    <UserInfo/>
                </Col>
           </Row> 
           <Row className="mt-4">
                <Col md={{span:2}} className="d-flex justify-content-center align-items-center">
                    <Navigation/>
                </Col>
                <Col md={{offset:1}} className="shadow-sm rounded">
                    <Accordion className="accordion-flush mt-4 mx-4">
                        {perusahaan.map((item) => (
                        <Accordion.Item eventKey={item.no_ptpln}>
                            <Accordion.Header>{item.nama_perusahaan}</Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    <Col md lg="7" className="text-start">
                                        {item.deskripsi}

                                        <br/><br/>
                                        <ul>
                                        <li><b>Tanggal Ujian : </b></li>
                                        <li>{item.tanggal_ujian}</li>
                                        <li><b>Tempat Ujian : </b></li>
                                        <li>{item.nama_perusahaan}</li>
                                        </ul>
                                        <br/>
                                        <Button
                                            onClick={() => {
                                                if (userData === false) {
                                                  // Perform the action when userData is not found
                                                  // For example, navigate to the recruitment form
                                                  navigate(`/recruitment-form/${item.nama_perusahaan}/${item.tanggal_ujian}/${item.id_ptpln}`);
                                                }}}
                                            className="btn btn-primary"
                                            style={{ width: '100%' }}
                                            disabled={userData !== false}
                                        >
                                            {userData !== false ? 'Anda sudah Mendaftar!' : 'Daftar'}
                                        </Button>
                                    </Col>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                        ))}
                    </Accordion>
                </Col>
           </Row>
        </Container>
    )
}

export default Dashboard;