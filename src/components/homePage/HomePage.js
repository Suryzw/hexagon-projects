import { Row, Col, Container, Alert } from "react-bootstrap";
import Navigation from "./Navigation";
import UserInfo from "./UserInfo";
import { NavLink } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css'

function HomePage(){
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
                <Col md={{offset:1}} >
                    <Row className="shadow-sm rounded">
                        <Col>
                            <p className="text-end fs-1 me-5" style={{fontFamily:"'Oswald', sans-serif"}}>Hi, --Username--</p>
                            <br/>
                            <br/>
                            <Alert variant="info" className="mx-4 text-center">Open Recruitment sudah dibuka! Info lebih lanjut dapat mengklik <NavLink to={"/dashboard"} > Dashboard</NavLink></Alert>
                        </Col>
                    </Row>
                    <Row className="mt-4" style={{fontFamily:"'Roboto', sans-serif"}}>
                        <Col className="shadow-sm rounded me-3 fs-4">
                            Nomor pendaftaran
                            <Container className="alert alert-danger text-center fs-6 mt-3">
                                <p>Anda Belum Mendaftar</p>
                            </Container> 
                        </Col>
                        <Col className="shadow-sm rounded me-3 fs-4">
                            Pelaksanaan Ujian
                            <Container className="alert alert-danger text-center fs-6 mt-3">
                                <p>Anda Belum Mendaftar</p>
                            </Container> 
                        </Col>
                        <Col className="shadow-sm rounded fs-4">
                           Tempat Ujian
                            <Container className="alert alert-danger text-center fs-6 mt-3">
                                <p>Anda Belum Mendaftar</p>
                            </Container> 
                        </Col>
                    </Row>
                </Col>
           </Row>
        </Container>
    )
}

export default HomePage;