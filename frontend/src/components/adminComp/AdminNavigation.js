import { Col, Nav, Row} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css'

function AdminNavigation(){
    return(
        <Nav variant='underline' className="flex-column text-center" style={{width:'100%'}} defaultActiveKey={'/userdata'}>
            <Col className="my-md-1 py-2 shadow-sm rounded">
                <Nav.Item><NavLink className="nav-link" to={"/admindatauser"} >
                    <Row className="ps-3">
                        <Col md={3}>
                            <i className="bi-house" style={{fontSize:'120%'}}></i>
                        </Col>
                        <Col className="text-start">
                            User Data
                        </Col>
                    </Row>
                </NavLink></Nav.Item>
            </Col>
            <Col className="my-md-1 py-2 shadow-sm rounded">
                <Nav.Item><NavLink className="nav-link" to={'/adminrecruitmentdata'}>
                    <Row className="ps-3">
                        <Col md={3}>
                            <i className="bi-clipboard-data" style={{fontSize:'120%'}}></i>
                        </Col>
                        <Col className="text-start">
                            Recruitment Data
                        </Col>
                    </Row>
                </NavLink></Nav.Item>
            </Col>
            <Col className="my-md-1 py-2 shadow-sm rounded">
                <Nav.Item ><NavLink className="nav-link" to={"/admindatacompany"}>
                    <Row className="ps-2">
                        <Col md={3}>
                            <i className="bi-info-circle" style={{fontSize:'120%'}}></i>
                        </Col>
                        <Col className="text-start">
                            Data PT PLN
                        </Col>
                    </Row>
                </NavLink></Nav.Item>
            </Col> 
        </Nav>
    )
}

           
            
export default AdminNavigation;