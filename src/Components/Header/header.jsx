import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import UnitService from "../../services/UnitService";
import {
  Col,
  // eslint-disable-next-line
  Form,
  // eslint-disable-next-line
  FormControl,
  Nav,
  Container,
  Navbar,
  Image,
  Row,
  // eslint-disable-next-line
  Button,
  NavDropdown,
} from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  // eslint-disable-next-line
  FaSearch,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function Header() {
  const [etich, setEtich] = React.useState("");
  const [integrity, setIntegrity] = React.useState("");

  React.useEffect(() => {
    UnitService.getUnitFiles(1, 5).then((res) => {
      setEtich(res.data[2]);
      setIntegrity(res.data[13]);
    });
  }, []);

  console.log(etich, integrity);
  return (
    <>
      <Container
        fluid
        className="position-absolute top-header left-header d-none d-md-block"
      >
        <Row>
          <Col md={9} className="offset-md-3 top-header-content">
            <div className="d-flex align-items-center justify-content-between text-white py-2 pl-3">
              <h3>Portal de Transparência</h3>
              <div className="box-social-form d-flex align-items-center">
                {/* <Form inline>
                  <FormControl type="text" placeholder="Procurar" />
                  <Button className="search-button">
                    <FaSearch />
                  </Button>
                </Form> */}
                <ul className="social-links d-flex m-0">
                  <li>
                    <a
                      href="https://www.facebook.com/isacsaude"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebookF className="ml-2 mr-2" size="1.5rem" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/isac_os/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram className="ml-2 mr-2" size="1.5rem" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/isac-instituto-saude-e-cidadania/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin className="ml-2 mr-2" size="1.5rem" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCH7g5mRH3THHjNp-GEIk5og"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaYoutube className="ml-2 mr-2" size="1.5rem" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Navbar bg="light" expand="lg">
        <a href="https://isac.org.br" target="_blank" without rel="noreferrer">
          <Navbar.Brand>
            <Image src="/isac-logo.png" fluid />
          </Navbar.Brand>
        </a>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <span className="nav-link">Inicial</span>
            </LinkContainer>
            
            
            
            <NavDropdown title="Compliance">
              {/* <LinkContainer to='/blog-de-compliance'>
                <NavDropdown.Item>Blog</NavDropdown.Item>
              </LinkContainer> */}
              <a
                href={integrity.urlAwsS3}
                className="dropdown-item"
                target="_blank"
                rel="noreferrer"
              >
                Programa de Integridade
              </a>
              {/* <LinkContainer to="/politicas">
                <NavDropdown.Item>Políticas</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/manuais">
                <NavDropdown.Item>Normas e Manuais</NavDropdown.Item>
              </LinkContainer> */}
              <a
                href={etich.urlAwsS3}
                className="dropdown-item"
                target="_blank"
                rel="noreferrer"
              >
                Código de Ética
              </a>
            </NavDropdown>
            <LinkContainer to="/unidades/1">
              <span className="nav-link">Sede Administrativa</span>
            </LinkContainer>

            <NavDropdown title="Unidades Gerenciadas">
              <Link to="/contratos-vingentes">
              <span className="dropdown-item">Contratos vigentes</span>
              </Link>
              <Link to='/contratos-encerrados'>
              <span className='nav-link'>Unidades Gerenciadas</span>
            </Link>
            </NavDropdown>
            <LinkContainer to="/unidades-covid-19">
              <span className="nav-link">Unidades Covid-19</span>
            </LinkContainer>
            <a
              href="https://isac.org.br/contato/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="nav-link">Fale Conosco</span>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
