import { Row, Col, Container, Carousel } from "react-bootstrap";
import Navigation from "../../components/homePage/Navigation";
import UserInfo from "../../components/homePage/UserInfo";
import indonesiaPower from '../../assets/indonesiaPower.jpeg'
import nusantaraPower from '../../assets/nusantaraPower.jpg'
import primerIndonesia from '../../assets/primerIndonesia.jpg'
import '../../style/About.css'

function About(){
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
                <Col md={{offset:0}} className="shadow-sm rounded carousel">
                    <Carousel style={{width:'60%'}}>
                        <Carousel.Item>
                            <a href="http://www.plnindonesiapower.co.id">
                            <img src={indonesiaPower} width={'100%'}/>
                            </a>
                            <Carousel.Caption>
                            <h3>PT PLN Indonesia Power</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a href="http://www.plnepi.co.id">
                                <img src={primerIndonesia} width={'100%'}/></a>
                            <Carousel.Caption>
                            <h3>PT PLN Primer Indonesia</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a href="http://www.plnnusantarapower.co.id">
                                <img src={nusantaraPower} width={'100%'}/></a>
                            <Carousel.Caption>
                            <h3>PT PLN Nusantara Power</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default About;