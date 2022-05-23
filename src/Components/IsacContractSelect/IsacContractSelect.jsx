import React, { Fragment, useEffect, useState } from 'react';
import { Card, Col, Form } from 'react-bootstrap';

// import { FaDownload } from 'react-icons/fa';

import '../../styles/docSelect.css';

export default function IsacContractSelect(props) {
  let data = props.data;
  const [active, setActive] = useState(false);
  const [activeYears, setActiveYears] = useState(false);
  const [finalData, setFinalData] = useState([]);
  const [bkpData, setBkpData] = useState([]);
  const [selected, setSelected] = useState('');
  const [contract, setContract] = useState([]);

  useEffect(() => {
    setBkpData(data);
  }, [data]);

  useEffect(() => {
    setContract(data)
  }, [])


  function handleOnChange(event) {
    props.onChange(event)
  }

  return (
    <>{props.valid ?
      <Col md={6} className="mb-5">
          <Card className="shadow-lg">
            <Card.Body>
              <Form.Group>
                <Form.Label>{props.title}</Form.Label>
                  <>
                    <Form.Control
                      as="select"
                      id="docs"
                      onChange={handleOnChange}
                    >
                      {data.length === 0
                      ?
                    <option>Não foi localizado nenhum contrato de gestão</option>
                    :
                    contract.map((item) => (
                      <React.Fragment key={item.id}>
                          <option selected>Selecione o contrato de gestão</option>
                          <option value={item.id}>
                            {item.titulo} - {item.identificarContrato}
                          </option>
                      </React.Fragment>
                    ))
                    }
                    </Form.Control>
                  </>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
    :
    <Col md={6} className="mb-5">
    <Card className="shadow-lg">
      <Card.Body>
        <Form.Group>
          <Form.Label>{props.title}</Form.Label>
            <>
              <Form.Control
                as="select"
                id="docs"
                onChange={handleOnChange}
                disabled={data.length !== null ? true : false}
              >{data.length === 0
                ?
              <option>Não foi localizado nenhum contrato de gestão</option>
              :
              <>
              <option value={0} selected>Selecione o contrato de gestão</option>
              {/* <option value={data.id}>
                      {`${data.titulo} ${data.identificarContrato}`}
                    </option> */}
                    </>

              }
              </Form.Control>
            </>
        </Form.Group>
      </Card.Body>
    </Card>
  </Col>
    }

    </>
  );
}
