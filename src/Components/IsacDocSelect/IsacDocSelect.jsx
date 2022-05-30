import React, { Fragment, useEffect, useState } from 'react';
import { Card, Col, Form } from 'react-bootstrap';

// import { FaDownload } from 'react-icons/fa';

import '../../styles/docSelect.css';

export default function IsacDocSelect(props) {
  let data = props.data;
  let year = props.year;
  const [active, setActive] = useState(false);
  const [activeYears, setActiveYears] = useState(false);
  const [finalData, setFinalData] = useState([]);
  const [bkpData, setBkpData] = useState([]);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    setBkpData(data);
  }, [data]);

  function handleOnChange(event) {
    setSelected('0');
    console.log(bkpData);
    console.log('evento do handle', event.target.value);
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
    setSelected(target.value);
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

  return year ? (
    <>
      {props.group && (
        <Col md={6} className='mb-5'>
          <Card className='shadow-lg'>
            <Card.Body>
              <Form.Group>
                <Form.Label>{props.title}</Form.Label>
                {props.group && (
                  <>
                    <Form.Control
                      as='select'
                      id='docs'
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
                  <div
                    className={`docs ${active ? 'd-block active' : 'd-none'}`}
                  >
                    {finalData.map((item) => (
                      <Fragment key={item.id}>
                        {item.urlAwsS3 ? (
                          <a
                            href={item.urlAwsS3}
                            target='_blank'
                            without
                            rel='noreferrer'
                          >
                            <h6 className='pt-2'>{item.nomeExibicao}</h6>
                          </a>
                        ) : (
                          <a
                            href={`https://admin-portal.isac.org.br/ap/arquivo/download/${item.id}`}
                            target='_blank'
                            without
                            rel='noreferrer'
                          >
                            <h6 className='pt-2'>{item.nomeExibicao}</h6>
                          </a>
                        )}
                        <div className='doc-item'></div>
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
  ) : (
    <>
      {props.group && (
        <Col md={6} className='mb-5'>
          <Card className='shadow-lg'>
            <Card.Body>
              <Form.Group>
                <Form.Label>{props.title}</Form.Label>
                {props.group && (
                  <>
                    <Form.Control
                      as='select'
                      id='docs'
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
                      as='select'
                      defaultValue='Selecione o ano'
                      className={`w-25 years ${
                        activeYears ? 'd-block' : 'd-none'
                      }`}
                      id='years'
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
                            target='_blank'
                            without
                            rel='noreferrer'
                          >
                            <h6 className='pt-2'>{item.nomeExibicao}</h6>
                          </a>
                        ) : (
                          <a
                            href={`https://admin-portal.isac.org.br/ap/arquivo/download/${item.id}`}
                            target='_blank'
                            without
                            rel='noreferrer'
                          >
                            <h6 className='pt-2'>{item.nomeExibicao}</h6>
                          </a>
                        )}
                        <div className='doc-item'></div>
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
