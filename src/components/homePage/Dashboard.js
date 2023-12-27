import { Container, Row, Col, Accordion, Badge } from "react-bootstrap";
import UserInfo from "./UserInfo";
import Navigation from "./Navigation";
import './Dashboard.css'
import { Link } from "react-router-dom";
import PLNEPI from './assets/PLN-Energi-Primer-Indonesia.png';
import PLNIP from './assets/PLN-Indonesia-Power.png';
import PLNNP from './assets/PLN-Nusantara-Power.png';

function Dashboard(){
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
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>PT PLN Indonesia Power</Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    <Col md lg="7" className="text-start">
                                        PT PLN Indonesia Power, yang sebelumnya bernama PT Indonesia Power, merupakan Subholding PT PLN (Persero) yang memegang peranan strategis dalam sektor ketenagalistrikan di Indonesia. Kegiatan utama bisnis perusahaan saat ini yakni sebagai penyedia solusi energi yang meliputi penyediaan tenaga listrik melalui pembangkit tenaga listrik yang tersebar di Indonesia serta pengembangan bisnis Beyond kWh.

                                        <br/><br/>
                                        <ul>
                                        <li><b>Tanggal Ujian : </b></li>
                                        <li>-------------</li>
                                        <li><b>Waktu Ujian : </b></li>
                                        <li>-------------</li>
                                        <li><b>Tempat Ujian : </b></li>
                                        <li>-------------</li>
                                        </ul>
                                        <br/>
                                        <Link className="btn btn-primary disabled" style={{width:'100%'}}>Daftar</Link>
                                    </Col>
                                    <Col className="img-center">
                                        <img src={PLNIP} width={'70%'}/>
                                    </Col>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>PT PLN Nusantara Power</Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    <Col md lg="7" className="text-start">
                                        PT PLN Nusantara Power (PLN NP), yang sebelumnya bernama PT Pembangkitan Jawa-Bali (PJB), merupakan Subholding PT PLN (Persero) yang bergerak di bidang pembangkitan tenaga listrik. Berdiri sejak 3 Oktober 1995 dengan kapasitas pembangkit yang dikelola sebesar 18.258 MW tersebar di seluruh Indonesia. PLN NP juga mengembangkan bisnis melalui anak perusahaan di bidang jasa operation dan maintenance pembangkit, investasi pembangkit melalui JVC, penyediaan sparepart dan jasa pendukung lainnya.

                                        <br/><br/>
                                        <ul>
                                        <li><b>Tanggal Ujian : </b></li>
                                        <li>-------------</li>
                                        <li><b>Waktu Ujian : </b></li>
                                        <li>-------------</li>
                                        <li><b>Tempat Ujian : </b></li>
                                        <li>-------------</li>
                                        </ul>
                                        <br/>
                                        <Link className="btn btn-primary disabled" style={{width:'100%'}}>Daftar</Link>
                                    </Col>
                                    <Col className="img-center">
                                        <img src={PLNNP} width={'70%'}/>
                                    </Col>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>PT PLN Energi Primer Indonesia<span>&nbsp;</span><Badge bg="danger" className="align-self-end"><i class="bi bi-stars"></i></Badge></Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    <Col md lg="7" className="text-start">
                                        PT PLN Energi Primer Indonesia merupakan Subholding PT PLN (Persero) yang didirikan untuk memastikan ketersediaan pasokan suplai energi primer melalui konsolidasi proses pengadaan & logistik, pencarian sumber energi primer serta pengembangan ekosistem yang resilien dan rantai pasok yang kuat.

                                        <br/><br/>
                                        <ul>
                                        <li><b>Tanggal Ujian : </b></li>
                                        <li>4 Januari 2024</li>
                                        <li><b>Waktu Ujian : </b></li>
                                        <li>15.00 WIB</li>
                                        <li><b>Tempat Ujian : </b></li>
                                        <li>PT PLN Energi Primer Indonesia</li>
                                        </ul>
                                        <br/>
                                        <Link className="btn btn-primary" style={{width:'100%'}}>Daftar</Link>
                                    </Col>
                                    <Col className="img-center">
                                        <img src={PLNEPI } width={'70%'}/>
                                    </Col>
                                </Row>
                                
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
           </Row>
        </Container>
    )
}

export default Dashboard;