import React, { useState, useEffect } from 'react';
import { Container, Form, Col, Row, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/hexagonlogo.png';
import Header from '../../components/landingPagecomp/Header';

function SignUp() {
  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [isChecked, setIsChecked] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [registrationMessage, setRegistrationMessage] = useState(null);

  const navigate= useNavigate();

  // useEffect to retrieve stored form data from local storage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  //Menghandle jika checkbox sudah dicentang
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  //Menangkap setiap perubahan pada saat form diisi
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    

    // Check if passwords match while user is typing
    if (name === 'confirmPassword') {
      setPasswordMatch(prevMatch => value === formData.password);
    }
  };

  useEffect(() => {
    // Display the alert after the registrationMessage state is updated
    if (registrationMessage !== null) {
      alert(registrationMessage);
    }
  }, [registrationMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if password and confirmPassword match
    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password don't match");
      return; // Stop the submission if passwords don't match
    }
    try {
      const response = await fetch('http://localhost:8081/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log('Server response:', data);
      if (data.success) {
        // Registration successful
        setRegistrationMessage('Registration successful. Redirecting to login page...');
        // Add your redirection logic after successful signup
        // For example, redirect to a thank you page or the login page
        setTimeout(() => {
          navigate('/auth/login');
        }, 1000); // Redirect after 3 seconds
      } else {
        // Registration failed
        setRegistrationMessage(`Registration failed: ${data.message}`);
      }
      
    } catch (error) {
      console.error('Error during registration:', error);
      setRegistrationMessage('An error occurred during registration');
    }
    // Clear the stored form data from local storage
    localStorage.removeItem('formData');
    // Add your signup logic here using the formData state
    // For simplicity, let's just log the form data to the console
    console.log(formData);
    // Add your redirection logic after successful signup
    // For example, redirect to a thank you page
  };

  // Add event listener to clear form data on page refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      // Clear the local state when the page is about to unload
      localStorage.removeItem('formData');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
<>
            <Header />
            <Container style={{ marginTop: '7vh' }}>
                <Row className="text-center">
                    <Col>
                        <h3>Welcome Guest!</h3>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                    <Col xs={12} md={6}>
                    <div className="text-center">
                            <img src={logo} width={'30%'} alt="hexagonlogo" />
                        </div>
                        <Form className="text-start px-4 py-3 mt-2" onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Control
                    required='true'
                      type="text"
                      placeholder="Nama depan"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Nama Belakang"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
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
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  isInvalid={!passwordMatch}
                />
                {!passwordMatch && (
                  <Form.Control.Feedback type="invalid">
                    Passwords do not match
                  </Form.Control.Feedback>
                )}
              </Form.Group>
              <Form.Check
                label={
                  <p className="text text-secondary" style={{ fontSize: '11pt' }}>
                    Dengan meng-<i>click</i>, saya menyatakan bahwa saya telah membaca dan setuju dengan Kebijakan Privasi. Saya memberikan izin untuk mengumpulkan, menggunakan, dan menyimpan informasi pribadi saya sesuai dengan ketentuan dalam Kebijakan Privasi tersebut
                  </p>
                }
                name="checkBox1"
                type="checkbox"
                onChange={handleCheckboxChange}
              />
              <Col className="centered">
                <Button 
                  style={{ width: '100%' }}
                  type="submit" 
                  className={`btn btn-primary ${isChecked ? '' : 'disabled'}`} 
                  >
                  Gabung
                </Button>
              </Col>
              <p className="pt-3">
                Sudah memiliki akun? Klik <Link to={'/auth/login'}>link ini</Link>
              </p>
            </Form>
                    </Col>
                </Row>
            </Container>
        </>    
  );
}


export default SignUp;
