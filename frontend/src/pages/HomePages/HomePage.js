import { useEffect, useState } from "react";
import { Row, Col, Container, Alert } from "react-bootstrap";
import Navigation from "../../components/homePage/Navigation";
import UserInfo from "../../components/homePage/UserInfo";
import { useUserInput } from "../../UserInputContext";
import { NavLink } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css'

function HomePage(){
    const {userInput} = useUserInput();
    const userid = String(userInput.userId);
    const [userData, setUserData] = useState('');
    const [userStatus, setUserStatus] = useState('');
    const [statusRec, setStatRec] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:8081/check-registration/${userid}`)
        .then(res=>res.json())
        .then(data =>{
            setUserData(data);
            if (data && data.length > 0) {
            // Check if 'status' property exists before accessing it
            setUserStatus(data[0].status);
            } else {
                // Handle the case where 'status' property is not available
                setUserStatus('unknown');
            }return fetch(`http://localhost:8081/perusahaan/tersedia`);
        })
        .then(secondRes => secondRes.json())
        .then(secondData => {
            setStatRec(secondData.length>0);
        })
        .catch(err => console.log(err))
    }, [userid]);

    const setAlert = () =>{
        switch (userStatus) {
            case 'hold':
                return 'alert-warning'; // Change this based on your actual style class for registered status
            case 'pass':
                return 'alert-success'; // Change this based on your actual style class for examScheduled status
            // Add more cases for other status values if needed
            default:
                return 'alert-danger'; // Default style for unknown status
        }
    };

    const setRecStatus = () =>{
        if(!statusRec){
            return 'danger'
        }
        else{
            return 'info'
        }
    };

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
                            <p className="text-end fs-1 me-5" style={{fontFamily:"'Oswald', sans-serif"}}>Hi, {userInput.userName}</p>
                            <br/>
                            <br/>
                            <Alert variant={setRecStatus()} className="mx-4 text-center">
                                {statusRec ? (
                                    <p>Open Recruitment sudah dibuka! Info lebih lanjut dapat mengklik <NavLink to="/dashboard">Dashboard</NavLink></p>
                                ) : (
                                    <p>Open Recruitment Ditutup</p>
                                )}
                            </Alert>
                        </Col>
                    </Row>
                    <Row className="mt-4" style={{fontFamily:"'Roboto', sans-serif"}}>
                        <Col className="shadow-sm rounded me-3 fs-4">
                            Nomor pendaftaran
                            <Container className={`alert ${setAlert()} text-center fs-6 mt-3`}>
                                <p>{userStatus==='hold'?'Menunggu Verifikasi':
                                    userStatus==='pass'?userData[0].id_peserta:
                                    'Anda Belum Mendaftar'}</p>
                            </Container> 
                        </Col>
                        <Col className="shadow-sm rounded me-3 fs-4">
                            Pelaksanaan Ujian
                            <Container className={`alert ${setAlert()} text-center fs-6 mt-3`}>
                                <p>{userStatus==='hold'?'Menunggu Verifikasi':
                                    userStatus==='pass'?userData[0].tanggal:
                                    'Anda Belum Mendaftar'}</p>
                            </Container> 
                        </Col>
                        <Col className="shadow-sm rounded fs-4">
                           Tempat Ujian
                            <Container className={`alert ${setAlert()} text-center fs-6 mt-3`}>
                                <p>{userStatus==='hold'?'Menunggu Verifikasi':
                                    userStatus==='pass'?userData[0].tujuan:
                                    'Anda Belum Mendaftar'}</p>
                            </Container> 
                        </Col>
                    </Row>
                </Col>
           </Row>
        </Container>
    )
}

export default HomePage;