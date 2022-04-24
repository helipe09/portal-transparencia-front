import React, { useState, useEffect } from 'react';
import {
  Card,
  Col,
  Container,
  Row,
  Button,
  Accordion,
  Image,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../../Components/Banner/banner';
import UnitService from '../../services/UnitService';

import ContractService from '../../services/ContractService';
import PostService from '../../services/PostService';

import '../../styles/home.css';
import Slider from 'react-slick';
export default function Home() {
  // eslint-disable-next-line
  const [unit, setUnit] = useState([]);
  const [contracts, setContracts] = useState([]);
  const [post, setPost] = useState([]);
  const [units, setUnits] = useState([]);
  const [ufs, setUfs] = useState([]);
  const [unitsByUf, setUnitsByUf] = useState([]);


  useEffect(() => {
    UnitService.getAll().then((results) => {
      const ordenar = results.data.sort(function (a, b) {
        return a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0;
      });
      setUnits(ordenar);
    });
  }, []);


  useEffect(() => {
    const ufGroup = units.reduce((object, unit) => {
      object[unit.uf] = [...(object[unit.uf] || []), unit];
      return object;
    }, {});
    setUfs(Object.keys(ufGroup).sort((a, b) => a.localeCompare(b)));
    setUnitsByUf(ufGroup);
  }, [units]);

  const states = [
    {
      uf: 'AC',
      name: 'Acre',
    },
    {
      uf: 'AL',
      name: 'Alagoas',
    },
    {
      uf: 'AP',
      name: 'Amapá',
    },
    {
      uf: 'AM',
      name: 'Amazonas',
    },
    {
      uf: 'BA',
      name: 'Bahia',
    },
    {
      uf: 'CE',
      name: 'Ceará',
    },
    {
      uf: 'DF',
      name: 'Distrito Federal',
    },
    {
      uf: 'ES',
      name: 'Espírito Santo',
    },
    {
      uf: 'GO',
      name: 'Goiás',
    },
    {
      uf: 'MA',
      name: 'Maranhão',
    },
    {
      uf: 'MT',
      name: 'Mato Grosso',
    },
    {
      uf: 'MS',
      name: 'Mato Grosso do Sul',
    },
    {
      uf: 'MG',
      name: 'Minas Gerais',
    },
    {
      uf: 'PA',
      name: 'Pará',
    },
    {
      uf: 'PB',
      name: 'Paraíba',
    },
    {
      uf: 'PR',
      name: 'Paraná',
    },
    {
      uf: 'PE',
      name: 'Pernambuco',
    },
    {
      uf: 'PI',
      name: 'Piauí',
    },
    {
      uf: 'RJ',
      name: 'Rio de Janeiro',
    },
    {
      uf: 'RN',
      name: 'Rio Grande do Norte',
    },
    {
      uf: 'RS',
      name: 'Rio Grande do Sul',
    },
    {
      uf: 'RO',
      name: 'Rondônia',
    },
    {
      uf: 'RR',
      name: 'Roraima',
    },
    {
      uf: 'SC',
      name: 'Santa Catarina',
    },
    {
      uf: 'SP',
      name: 'São Paulo',
    },
    {
      uf: 'SE',
      name: 'Sergipe',
    },
    {
      uf: 'TO',
      name: 'Tocantins',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  useEffect(() => {
    UnitService.getValidUnit().then((results) => {
      setUnit(results.data);
    });
  }, []);

  useEffect(() => {
    ContractService.get().then((results) => {
      setContracts(results.data);
    });
  }, []);

  useEffect(() => {
    PostService.getLastTwo().then((results) => {
      setPost(results.data);
    });
  }, []);

  return (
    <>
      <Banner />
      <Container>
        {/* <Row className="form-search my-5">
          <Col md={10} className="offset-md-1 py-5">
            <Card className="shadow-lg border-0 p-3">
              <Card.Body>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Informações Gerais</Form.Label>
                  <Form.Control as="select">
                    <option>Selecione uma opção</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Button variant="outline-success" className="px-5 float-right">
                  Buscar
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
        <Row className="box-units my-5" id="unidades-gerenciadas">
          <Col md={12} className="text-center">
            <h2>Nossos Projetos</h2>
          </Col>
          <Col md={10} className="offset-md-1 py-5">
            <Card className="shadow-lg border-0">
              <Card.Body>
                {/* <Accordion defaultActiveKey="0">
                  <Row>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <h5>Brasil</h5>
                    </Accordion.Toggle>
                  </Row>
                  <Accordion.Collapse eventKey="0">
                    <ul className="list-units">
                      {units.map((item) => {
                        return (
                          <li key={item.id}>
                            <Link to={`unidades/${item.id}`}>{item.nome}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </Accordion.Collapse>
                </Accordion> */}
                <Accordion defaultActiveKey="0">
                  <Row>
                    {ufs.map((uf) => (
                      <Col md={6} key={uf}>
                        <Accordion defaultActiveKey="0">
                          <Row>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="0"
                            >
                              <h5>
                                {states.map((state) =>
                                  state.uf === uf ? state.name : ''
                                )}
                              </h5>
                            </Accordion.Toggle>
                          </Row>
                          <Accordion.Collapse eventKey="0">
                            <ul className="list-units">
                              {
                                // eslint-disable-next-line
                                unitsByUf[uf].map((unit) => (
                                  <li key={unit.id}>
                                    <Link to={`unidades/${unit.id}`}>
                                      {unit.nome}
                                    </Link>
                                  </li>
                                ))
                              }
                            </ul>
                          </Accordion.Collapse>
                        </Accordion>
                      </Col>
                    ))}
                  </Row>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <Row className="box-blog my-5">
          <Col md={12} className="text-center">
            <h2>Notícias de Compliance</h2>
          </Col>
        </Row> */}
        {/* <Row className="box-blog-list my-5">
          <Col md={10} className="offset-md-1">
            <Row className="my-5">
              {post.map((item) => {
                console.log("teste de post", item)
                return (
                  <Col md={6}>
                    <Card className="shadow-lg border-0 mb-5" key={item.id}>
                      <Card.Img variant="top" src={item.image.url} />
                      <Card.Body>
                        <Card.Title>
                          <h3>{item.titulo}</h3>
                        </Card.Title>
                        <div className="text-desc">
                          <h6
                            dangerouslySetInnerHTML={{ __html: item.descricao }}
                          ></h6>
                        </div>
                        <Link to={`blog-de-compliance/${item.slug}`}>
                          <Button
                            variant="outline-success"
                            className="px-3 float-right"
                          >
                            Saiba Mais
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row> */}
        <Row className="box-client my-5">
          <Col md={12} className="text-center pt-3 pb-5">
            <h2>Contratantes</h2>
          </Col>
          <Col md={10} className="offset-md-1 mb-5">
            <Slider {...settings}>
              {contracts.map((item) => {
                return (
                  <div>
                    <Image src={item.urlS3} width="170" />
                  </div>
                );
              })}
            </Slider>
          </Col>
        </Row>
      </Container>
    </>
  );
}