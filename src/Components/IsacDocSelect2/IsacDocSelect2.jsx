import React, { Fragment, useEffect, useState } from 'react';
import { Card, Col, Form } from 'react-bootstrap';
import UnitService from '../../services/UnitService';

// import { FaDownload } from 'react-icons/fa';

import '../../styles/docSelect.css';

export default function IsacDocSelect2(props) {
  let data = props.data;
  let idUnidade = props.idUnidade;
  let grupo = props.group;
  const [active, setActive] = useState(false);
  const [activeYears, setActiveYears] = useState(false);
  const [finalData, setFinalData] = useState([]);
  const [bkpData, setBkpData] = useState([]);
  const [selected, setSelected] = useState('');
  const [teste, setTeste] = useState([])

  useEffect(() => {
    setBkpData(data);
  }, [data]);

  // useEffect(() => {
  //   grupo?.map((item) => {
  //     UnitService.getFinishedDocByContract(idUnidade, item.grupo, 249, item.id, 2021 ).then((results) => {
  //       console.info('resultado do contrato finalizado 2', results.data)
  //       // setTeste('teste',results.data[0].tiposDocumentos)
  //     });
  //   })
  // },[grupo])



  function handleOnChange(event) {
    setSelected('0');
    if (+event.target.value === 0) {
      setActive(false);
      return;
    }
    if (+event.target.value !== 0) {
      setActive(true);
      setActiveYears(true);
      setFinalData(bkpData);
    }
    props.onChange(event);
  }

  function handleChangeYear({ target }) {
    console.log('ano', target.value)
    setSelected(target.value)
    let temp = bkpData;
    if (+target.value === 0) {
      setActive(false);
      return;
    }
    if (+target.value !== 0 && target.id === 'years') {
      temp = temp.filter((item) => item.anoReferencia === +target.value);
      setActive(true);
    }
    setFinalData(temp);
    return target;
  }

  return (
    <>
      {props.group && (
        <Col md={6} className="mb-5">
          <Card className="shadow-lg">
            <Card.Body>
              <Form.Group>
                <Form.Label>Testando</Form.Label>
                {props.group && (
                  <>
                    <Form.Control
                      as="select"
                      id="docs"
                      onChange={handleOnChange}
                      disabled={props.group.length <= 0 ? true : false}
                    >
                      {props.group && (
                        <>
                          <option value={0}>
                            {props.group.length <= 0
                              ? 'Nenhum documento registrado'
                              : 'Selecione uma opção'}
                          </option>
                          {props?.group.map((item) => (
                            <React.Fragment key={item.id}>
                              {item?.documentos.length === 0 ? null : (
                                <option value={item.id}>
                                  {item.nome} - ({item?.documentos.length})
                                </option>
                              )}
                            </React.Fragment>
                          ))}
                        </>
                      )}
                    </Form.Control>
                  </>
                )}
              </Form.Group>

              {finalData && (
                <>
                  <Form.Group>
                    <Form.Control
                      as="select"
                      defaultValue="Selecione o ano"
                      className={`w-25 years ${
                        activeYears ? 'd-block' : 'd-none'
                      }`}
                      id="years"
                      onChange={handleChangeYear}
                      value={selected}
                    >
                      <option value={0}>Ano</option>
                      {[...new Set(data.map((item) => item.anoReferencia))].map(
                        (option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        )
                      )}
                    </Form.Control>
                  </Form.Group>
                  <div
                    className={`docs ${active ? 'd-block active' : 'd-none'}`}
                  >
                    {finalData.map((item) => (
                      <Fragment key={item.id}>
                        {item.urlAwsS3 ? (
                          <a
                            href={item.urlAwsS3}
                            target="_blank"
                            without
                            rel="noreferrer"
                          >
                            <h6 className="pt-2">{item.nomeExibicao}</h6>
                          </a>
                        ) : (
                          <a
                            href={`https://admin-portal.isac.org.br/ap/arquivo/download/${item.id}`}
                            target="_blank"
                            without
                            rel="noreferrer"
                          >
                            <h6 className="pt-2">{item.nomeExibicao}</h6>
                          </a>
                        )}
                        <div className="doc-item"></div>
                      </Fragment>
                    ))}
                  </div>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      )}
    </>
  );
}
