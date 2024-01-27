import { useState } from "react";
import { Container,Form,Row,Col, Button } from "react-bootstrap";
import logo from '../../assets/hexagonlogo.png'
import '../../style/Body.css';
import { Link,useNavigate } from "react-router-dom";
import Header from "../../components/landingPagecomp/Header";



function Home(){
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
      });
    
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store the form data in local storage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Redirect to the signup page
    navigate('/auth/signup');
  };
    return(
        <body>
            <Header/>
            <Container fluid style={{marginTop:'7vh'}}>
            <Row className="text-center">
                <Col auto>
                    <h1 className="pt-4 fs-2">Welcome to our landing page</h1>
                    <p className="mt-0"style={{fontFamily:"'Wallpoet', sans serif",fontSize:'100px'}}>HEXAGON</p>
                    <p className="fs-4">Wanna know more about Open Recruitment PLN Group? You're on right website!</p>
                </Col>
                <Col xs={{ span: 5, offset: 1 }}>
                    <Container className="border shadow text-start form-bg rounded-3">
                        <Form className="text-start px-4 py-3 mt-2" onSubmit={handleSubmit}>
                            <Row>
                                <Col xs={7}>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Nama depan"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Nama Belakang"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="email"
                                        placeholder="Alamat email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="tel"
                                        placeholder="Nomor Telepon"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                </Col>
                                <Col>
                                    <img src={logo} alt="hexagonlogo" width={'100%'}></img>
                                </Col>
                            </Row>
                            <Form.Check
                                label={<p className="text text-secondary" style={{fontSize:"11pt"}}>Dengan meng-<i>click</i>, saya menyatakan bahwa saya telah membaca dan setuju dengan Kebijakan Privasi. Saya memberikan izin untuk mengumpulkan, menggunakan, dan menyimpan informasi pribadi saya sesuai dengan ketentuan dalam Kebijakan Privasi tersebut</p>}
                                name="checkBox1"
                                type="checkbox"
                                onChange={handleCheckboxChange}
                            /> 
                            <Button type="submit" className={`btn btn-primary ${isChecked ? '' : 'disabled'}`} disabled={!isChecked}> Gabung Sekarang</Button>
                            <p className="pt-3">Sudah punya akun? klik di <Link to={'/auth/login'}>sini</Link></p>
                        </Form>                    
                    </Container>  
                </Col>
            </Row>
        </Container>
        </body>
    ); 
}
export default Home;

