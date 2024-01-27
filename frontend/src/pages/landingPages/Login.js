import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useUserInput   } from "../../UserInputContext";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/hexagonlogo.png';
import '../../style/style.css';
import Header from "../../components/landingPagecomp/Header";

function Login() {
    const navigate = useNavigate();
    const {updateUserInput } = useUserInput();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8081/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (data.success) {
                const { userData } = data;
                console.log('User data after login:', userData);
                updateUserInput(userData);
                
                if(userData.userEmail === 'admin@admin'){
                    if(userData.userPass === 'admin'){
                        navigate('/admindatauser')
                    }
                }
                else{
                    navigate('/home');
                }
                // Login successful
                // Redirect or perform any other action as needed
                 // Example: Redirect to the dashboard page
            } else {
                // Login failed
                alert(data.message); // Display an error message
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <>
            <Header />
            <Container style={{ marginTop: '7vh' }}>
                <Row className="justify-content-center align-items-center">
                    <Col xs={12} sm={8} md={6} lg={5} className="text-center">
                        <h3>Welcome Back!</h3>
                        <img src={logo} width={'50%'} alt="Hexagon Logo" />
                        <Form className="text-start px-4 py-3 mt-2">
                            <Form.Group className="mb-3">
                                <Form.Control
                                    name="email"
                                    type="email"
                                    placeholder="Alamat email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            {/* Login Button */}
                            <Button
                                variant="primary"
                                style={{ width: '100%' }}
                                onClick={handleLogin}
                            >
                                Masuk
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;
