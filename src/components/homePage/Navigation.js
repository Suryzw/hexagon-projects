import { Col, Nav, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem} from "react-bootstrap";
import { GiRadioTower } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css'

function Navigation(){
    return(
        <Nav variant='underline' className="flex-column text-center" style={{width:'100%'}} defaultActiveKey={'/homepage'}>
            <Col className="my-md-1 py-2 shadow-sm rounded">
                <Nav.Item><NavLink className="nav-link" to={"/home"} >
                    <Row className="ps-2">
                        <Col md={4}>
                            <i className="bi-house" style={{fontSize:'120%'}}></i>
                        </Col>
                        <Col className="text-start">
                            Home
                        </Col>
                    </Row>
                </NavLink></Nav.Item>
            </Col>
            <Col className="my-md-1 py-2 shadow-sm rounded">
                <Nav.Item><NavLink className="nav-link" to={'/dashboard'}>
                    <Row className="ps-3">
                        <Col md={3}>
                            <i className="bi-clipboard-data" style={{fontSize:'120%'}}></i>
                        </Col>
                        <Col className="text-start">
                            Dashboard
                        </Col>
                    </Row>
                </NavLink></Nav.Item>
            </Col>
            <Col className="my-md-1 py-2 shadow-sm rounded">
                <Nav.Item>
                    <Row className="ps-3">
                        <Col md={3}>
                            <i class="bi bi-journal-bookmark"></i>
                        </Col>
                        <Col className="text-start">
                            <Dropdown as={NavItem}>
                                <DropdownToggle as={NavLink}>Arus Kuat<span className="ps-4"></span></DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>1. Trafo</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Col>
                    </Row>
                </Nav.Item>
            </Col>
            <Col className="my-md-1 py-2 shadow-sm rounded">
                <Nav.Item ><NavLink className="nav-link" to={"/about"}>
                    <Row className="ps-2">
                        <Col md={4}>
                            <i className="bi-info-circle" style={{fontSize:'120%'}}></i>
                        </Col>
                        <Col className="text-start">
                            About
                        </Col>
                    </Row>
                </NavLink></Nav.Item>
            </Col> 
        </Nav>
    )
}

           
            
export default Navigation;