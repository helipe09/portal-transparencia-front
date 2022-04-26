import React, { useEffect, useState } from 'react';
import { Accordion, Col, Container, Row, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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

export default function UnitCovid() {
  const [covid, setCovid] = useState([]);
  const [ufs, setUfs] = useState([]);
  const [unitsByUf, setUnitsByUf] = useState([]);

  useEffect(() => {
    const ufGroup = covid.reduce((object, unit) => {
      object[unit.uf] = [...(object[unit.uf] || []), unit];
      return object;
    }, {});
    setUfs(Object.keys(ufGroup).sort((a, b) => a.localeCompare(b)));
    setUnitsByUf(ufGroup);
  }, [covid]);

  useEffect(() => {
    UnitService.getAllCovid().then((results) => {
      const ordenar = results.data.sort(function (a, b) {
        return a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0;
      });
      setCovid(ordenar);

      console.log(results.data);
    });
  }, []);

  return (
    <>
      <Container>
        <Row className="box-units pt-5">
          <Col md={12} className="text-center">
            <h2>Unidades COVID-19</h2>
          </Col>
          <Col md={10} className="offset-md-1 py-5">
            <Card className="shadow-lg border-0">
              <Card.Body>
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
      </Container>
    </>
  );
}
