import React, { useEffect, useState } from 'react';
import {
  Accordion,
  Col,
  Container,
  Row,
  Button,
  Card,
  Image,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../../Components/Banner/banner';
import ContractService from '../../services/ContractService';
import Slider from 'react-slick';

import UnitService from '../../services/UnitService';
import '../../styles/home.css';

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

export default function ValidUnit() {
  const [validUnit, setvalidUnit] = useState([]);
  const [ufs, setUfs] = useState([]);
  const [unitsByUf, setUnitsByUf] = useState([]);
  const [contratosValidos, setContratosValidos] = useState([]);
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    const ufGroup = validUnit.reduce((object, unit) => {
      object[unit.uf] = [...(object[unit.uf] || []), unit];
      return object;
    }, {});
    setUfs(Object.keys(ufGroup).sort((a, b) => a.localeCompare(b)));
    setUnitsByUf(ufGroup);
  }, [validUnit]);

  useEffect(() => {
    UnitService.getContratosVigentes().then((response) => {
      setContratosValidos(response.data);
    });
  }, []);

  console.log('contratos Validos', contratosValidos);

  useEffect(() => {
    UnitService.getContratosVigentes().then((results) => {
      const ordenar = results.data.sort(function (a, b) {
        return a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0;
      });
      setvalidUnit(ordenar);

      console.log(results.data);
    });
  }, []);

  useEffect(() => {
    ContractService.get().then((results) => {
      setContracts(results.data);
    });
  }, []);

  return (
    <>
      <Banner />
      <Container>
        <Row className='box-units pt-5'>
          <Col md={12} className='text-center'>
            <h2>Unidades Gerenciadas</h2>
          </Col>
          <Col md={10} className='offset-md-1 py-5'>
            <Card className='shadow-lg border-0'>
              <Card.Body>
                <Accordion defaultActiveKey='0'>
                  <Row>
                    {ufs.map((uf) => (
                      <Col md={6} key={uf}>
                        <Accordion defaultActiveKey='0'>
                          <Row>
                            <Accordion.Toggle
                              as={Button}
                              variant='link'
                              eventKey='0'
                            >
                              <h5>
                                {states.map((state) =>
                                  state.uf === uf ? state.name : ''
                                )}
                              </h5>
                            </Accordion.Toggle>
                          </Row>
                          <Accordion.Collapse eventKey='0'>
                            <ul className='list-units'>
                              {
                                // eslint-disable-next-line
                                unitsByUf[uf].map((unit) => (
                                  <li key={unit.id}>
                                    <Link
                                      to={`unidades-gerenciadas/${unit.id}`}
                                    >
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
        <Row className='box-client my-5'>
          <Col md={12} className='text-center pt-3 pb-5'>
            <h2>Contratantes</h2>
          </Col>
          <Col md={10} className='offset-md-1 mb-5'>
            <Slider {...settings}>
              {contracts.map((item) => {
                return (
                  <div>
                    <Image src={item.urlS3} width='170' />
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
