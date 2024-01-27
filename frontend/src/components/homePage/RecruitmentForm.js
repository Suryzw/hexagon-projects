import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useUserInput } from "../../UserInputContext";
import formbg from '../../assets/formbg.jpg';

function RecruitmentForm() {

    const navigate = useNavigate();

    const {userInput} = useUserInput();
    const {name,tgl,id } = useParams(); //Variabel hasil dari Dashboard.js
    const [formData, setFormData] = useState({
        id_peserta: id+''+userInput.userId.toString(),
        id_user:userInput.userId,
        id_ptpln:id,
        nama: userInput.userName,
        email: userInput.userEmail,
        pendidikan: "",
        pengalaman: "",
        skill: "",
        alasan: "",
        telp: userInput.userTelp,
        tujuan: name,
        tanggal: tgl,
        status: "hold",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:8081/submitRecruitment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                
            });
            const result = await response.json();
            console.log(result);
            navigate('/home')
            alert("Pendaftaran Berhasil!")
            // Handle the result as needed (e.g., show a success message to the user)
        } catch (error) {
            console.error('Error submitting recruitment form:', error);
            // Handle errors (e.g., show an error message to the user)
        }
    };
    

    return (
        <Container fluid className="px-2">
                <Col md={{ span: 6, offset: 3 }}>
                <div className="bg-primary text-light p-4 mb-4">
                    <h1 className="display-4">Recruitment Form untuk {name}</h1>
                    <p className="lead">Isi sesuai dengan data diri Anda!</p>
                    <hr className="my-4" />
                </div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="nama">
                            <Form.Label>Nama</Form.Label>
                            <Form.Control
                                type="text"
                                name="nama"
                                value={formData.nama}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="telp">
                            <Form.Label>Telepon</Form.Label>
                            <Form.Control
                                type="tel"
                                name="telp"
                                value={formData.telp}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="pendidikan">
                            <Form.Label>Pendidikan</Form.Label>
                            <Form.Select
                                name="pendidikan"
                                value={formData.pendidikan}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Pendidikan</option>
                                <option value="SD">SD</option>
                                <option value="SMP">SMP</option>
                                <option value="SMA/SMK">SMA/SMK</option>
                                <option value="Diploma">Diploma</option>
                                <option value="Sarjana">Sarjana</option>
                                {/* Add more options as needed */}
                            </Form.Select>
                        </Form.Group>

                       <Form.Group controlId="pengalaman">
                            <Form.Label>Pengalaman</Form.Label>
                            <Form.Select
                                name="pengalaman"
                                value={formData.pengalaman}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Pengalaman</option>
                                <option value="belum ada">Belum ada penglaman</option>
                                <option value="1-2 tahun">1-2 tahun</option>
                                <option value="3-5 tahun">3-5 tahun</option>
                                <option value="Lebih dari 5 tahun">Lebih dari 5 tahun</option>
                                {/* Add more options as needed */}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group controlId="skill">
                            <Form.Label>Skill</Form.Label>
                            <Form.Control
                                type="text"
                                name="skill"
                                value={formData.skill}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="alasan">
                            <Form.Label>Alasan</Form.Label>
                            <Form.Control
                                type="text"
                                name="alasan"
                                value={formData.alasan}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Button 
                        variant="primary" 
                        type="submit" 
                        className="mt-3"
                        >
                            Submit
                        </Button>
                    </Form>
                </Col>
        </Container>
    );
}

export default RecruitmentForm;