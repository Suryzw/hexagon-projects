import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../assets/hexagonlogo.png'

function SignUp(){
    return(
            <Container style={{marginTop:'7vh'}}>
            <Row>
                <Col className="centered">
                <h3>Welcome Guest!</h3>
                </Col>
            </Row>
            <Row>
                <Col className="centered">
                    <img src={logo} width={'15%'} ></img>
                </Col>
            </Row>
            <Row className="centered">
                <Col className="col-6">
                    <Form className="text-start px-4 py-3 mt-2" >
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Nama depan" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Nama Belakang"/>
                                </Form.Group>   
                            </Col>
                        </Row>                       
                        <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="Alamat email" />
                        </Form.Group>                                
                        <Form.Group className="mb-3">
                            <Form.Control type="tel" placeholder="Nomor Telepon" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>
                        <Form.Check
                                label={<p className="text text-secondary" style={{fontSize:"11pt"}}>Dengan meng-<i>click</i>, saya menyatakan bahwa saya telah membaca dan setuju dengan Kebijakan Privasi. Saya memberikan izin untuk mengumpulkan, menggunakan, dan menyimpan informasi pribadi saya sesuai dengan ketentuan dalam Kebijakan Privasi tersebut</p>}
                                name="checkBox1"
                                type="checkbox"
                        /> 
                        <Col className="centered">
                            <Button style={{width:'100%'}}variant="primary" type="submit">Gabung</Button>
                        </Col>
                            <p className="pt-3">Sudah memiliki akun? Klik <Link to={'/auth/login'}>link ini</Link></p>

                    </Form> 
                </Col>
            </Row>
        
        
        </Container>
    )
}
export default SignUp