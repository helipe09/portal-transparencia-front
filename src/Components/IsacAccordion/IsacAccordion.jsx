import React, { Fragment } from 'react';
import { Accordion, Card, Button, Col, Row } from 'react-bootstrap';

import '../../styles/accordion.css';
export default function IsacAccordion(props) {
  return (
    <Col md={6} className="mb-4">
      <Accordion>
        <Card className="shadow-lg border-0">
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              {props.title}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="bg-white">
              {props.data.length <= 0 ?
                <>
                  <div className="alert alert-warning" role="alert">
                    Nenhum documento cadastrado
                </div>
                </> : props.data.map(item => (
                  <Fragment key={item.id}>
                    <Row>
                      <div className="d-flex align-items-center justify-content-between border-bottom">
                        <Col>
                          <div className="box-infos">
                            <h5 className="pt-2">{item[props.doc_name]}</h5>
                            <p className="text-muted">{item[props.description]}</p>
                          </div>
                        </Col>
                        <Col>
                          <a href={`https://portal-transparencia-isac.herokuapp.com/ap/arquivo/download/${item.id}`} target="_blank" without rel="noreferrer" className="nav-link">Baixar</a>
                        </Col>

                      </div>
                    </Row>
                  </Fragment>
                ))}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Col>
  );
}