import { Container,Col,Row, Navbar, Dropdown, DropdownToggle, NavItem, DropdownMenu, DropdownItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import pln from '../../assets/pln.png'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useUserInput } from "../../UserInputContext";

function AdminInfo(){
    const {userInput} = useUserInput();
    const { clearUserInput } = useUserInput();

    const handleLogout = () => {
        clearUserInput();
    };
    return(
        <Navbar expand='lg' className='shadow-sm mb-3 rounded'>
            <NavLink to="/admin" className="navbar navbar-brand ms-4">
                <img src={pln} alt='LogoPln' width={'20%'}></img>
            </NavLink>
            <Container className="justify-content-end me-4">
                <Row>
                    <Col md={'auto'} style={{fontFamily:"'Verdana', sans-serif"}}>
                        <p className="pt-3">{userInput.userName}</p>
                    </Col>
                    <Col>
                        <Dropdown as={NavItem}>
                            <DropdownToggle as={NavLink}>
                                <i className="bi-person-circle" style={{fontSize:'210%', color:'var(--bs-info)'}}><span className="ps-2"></span></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                                <DropdownItem><NavLink onClick={handleLogout} to={'/'}>Logout</NavLink></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                </Row>
            </Container>  
        </Navbar>
    )
}
export default AdminInfo;