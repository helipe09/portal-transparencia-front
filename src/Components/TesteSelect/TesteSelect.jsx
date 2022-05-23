import React, { Fragment, useEffect, useState } from 'react';
import { Card, Col, Form } from 'react-bootstrap';

// import { FaDownload } from 'react-icons/fa';

import '../../styles/docSelect.css';

export default function TesteSelect(props) {
  let data = props.data;

  function handleOnChange(event) {
    props.onChange(event);
  }

  useEffect(() => {
    console.log('aqui a data', data);
  }, [data]);

  return (
    <>
      <Col md={6} className='mb-5'>
        <Card className='shadow-lg'>
          <Card.Body>
            <Form.Group>
              <Form.Label>Instrumentos de Gestão</Form.Label>
              <Form.Control as='select' id='docs' onChange={handleOnChange}>
                <option>Selecione o Contrato de Gestão</option>
                {data.map((item) => {
                  return (
                    <option value={item.id}>
                      {item.titulo} - {item.identificarContrato}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
