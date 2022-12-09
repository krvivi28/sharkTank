// import Recat from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "./footer.css"
const Footer=()=>
{
    return (
        <Navbar id="footer" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="text-info" href="#home">
            {/* <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} */}
            XHARK TANK
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
}
export default Footer;