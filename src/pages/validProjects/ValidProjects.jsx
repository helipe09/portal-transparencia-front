// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { Col, Container, Image, Row, Spinner } from 'react-bootstrap';
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGlobe,
} from 'react-icons/fa';
import UnitService from '../../services/UnitService';

import Contractor from '../../Components/Contractor/Contractor';
import IsacDocSelect from '../../Components/IsacDocSelect/IsacDocSelect';

import ContractService from '../../services/ContractService';

import '../../styles/unit.css';
import IsacContractSelect from '../../Components/IsacContractSelect/IsacContractSelect';
import IsacDocSelect2 from '../../Components/IsacDocSelect2/IsacDocSelect2';

export default function ValidProjects(props) {
  const [unit, setUnit] = useState({});

  const [groups, setGroups] = useState([]);

  const [contratante, setContratante] = useState([]);

  const [managementContract, setManagementContract] = useState([]);

  const [hiringInformation, setHiringInformation] = useState([]);
  const [hiringInformationDocs, setHiringInformationDocs] = useState([]);

  const [contractExecution, setContractExecution] = useState([]);
  const [contractExecutionDocs, setContractExecutionDocs] = useState([]);

  const [accountability, setAccountability] = useState([]);
  const [accountabilityDocs, setAccountabilityDocs] = useState([]);

  const [accountingStatements, setAccountingStatements] = useState([]);
  const [accountingStatementsDocs, setAccountingStatementsDocs] = useState([]);

  const [governance, setGovernance] = useState([]);
  const [governanceDocs, setGovernanceDocs] = useState([]);

  const [reporting, setReporting] = useState([]);
  const [reportingDocs, setReportingDocs] = useState([]);

  const [financialInformation, setFinancialInformation] = useState([]);
  const [financialInformationDocs, setFinancialInformationDocs] = useState([]);

  const [teste, setTeste] = useState([])

  const idUnidade = props.match.params.id;



  useEffect(() => {
    const id = props.match.params.id;
    UnitService.get(id).then((results) => {
      setUnit(results.data);
    });
    // UnitService.getDocs(id).then((results) => {
    //   console.log('documentos geral Unidade', results.data.grupos)
    //   setContratante(results.data.contratante);
    //   setGroups(results.data.grupos);
    // });
    UnitService.getActiveManagementContract(id).then((results)=>{
      setManagementContract(results.data);
    })
  }, [props]);

  useEffect(() => {
    const id = props.match.params.id;
    UnitService.getDocsByIdAndContract(id, managementContract.id).then((response) => {
      console.log('testenaod select valid', response)
      setContratante(response.data.contratante);
      setGroups(response.data.grupos)
    })
  },[unit])

  useEffect(() => {
    setHiringInformation(groups[0]?.tiposDocumentos);
    setContractExecution(groups[1]?.tiposDocumentos);
    setAccountability(groups[2]?.tiposDocumentos);
    setAccountingStatements(groups[3]?.tiposDocumentos);
    setGovernance(groups[4]?.tiposDocumentos);
    setReporting(groups[5]?.tiposDocumentos);
    setFinancialInformation(groups[6]?.tiposDocumentos);
  }, [groups]);

  // useEffect(() => {
  //   const idUnidade = props.match.params.id;
  //   groups[2]?.tiposDocumentos.map((item) => {
  //     // console.log('tipos de docs console',item)
  //     UnitService.getFinishedDocByContract(idUnidade, item.grupo, 249, item.id, 2021 ).then((results) => {
  //       console.log('resultado do contrato finalizado', results.data)
  //     });
  //   })
  // }, [groups])



  function handleChangeHiringInformationDocs(event) {
    const value = +event.target.value;
    if (value === 0) {
      setHiringInformationDocs('');
    } else {
      let finalData = hiringInformation.filter((item) => item.id === value);
      setHiringInformationDocs(finalData[0].documentos);
      console.log('final data',finalData)
    }
  }

  function handleChangeContractExecutionDocs(event) {
    const value = +event.target.value;
    if (value === 0) {
      setContractExecutionDocs('');
    } else {
      let finalData = contractExecution.filter((item) => item.id === value);
      setContractExecutionDocs(finalData[0].documentos);
    }
  }

  function handleChangeAccountabilityDocs(event) {
    const value = +event.target.value;
    if (value === 0) {
      setAccountabilityDocs('');
    } else {
      let finalData = accountability.filter((item) => item.id === value);
      setAccountabilityDocs(finalData[0].documentos);
    }
  }

  function handleChangeAccountingStatementsDocs(event) {
    const value = +event.target.value;
    if (value === 0) {
      setAccountingStatementsDocs('');
    } else {
      let finalData = accountingStatements.filter((item) => item.id === value);
      setAccountingStatementsDocs(finalData[0].documentos);
    }
  }

  function handleChangeGovernanceDocs(event) {
    const value = +event.target.value;
    if (value === 0) {
      setGovernanceDocs('');
    } else {
      let finalData = governance.filter((item) => item.id === value);
      setGovernanceDocs(finalData[0].documentos);
    }
  }

  function handleChangeReportingDocs(event) {
    const value = +event.target.value;
    if (value === 0) {
      setReportingDocs('');
    } else {
      let finalData = reporting.filter((item) => item.id === value);
      setReportingDocs(finalData[0].documentos);
    }
  }

  function handleChangeFinancialInformationDocs(event) {
    const value = +event.target.value;
    if (value === 0) {
      setFinancialInformationDocs('');
    } else {
      let finalData = financialInformation.filter((item) => item.id === value);
      setFinancialInformationDocs(finalData[0].documentos);
    }
  }

  function handleInstruments(event) {
    console.log('evento de gestão', event)
  }

  return (
    <>
      {groups.length === 0 ? (
        <div className="loading">
          <Spinner animation="border" role="status" variant="primary">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Container className="box-unit-info py-5">
          <Row className="py-5">
            <Col md={6}>
              <h1>{unit.nome}</h1>
              <p>{unit.resumo}</p>
              <h3 className="d-none">Gestores</h3>
            </Col>
            <Col md={6}>
              {unit.idArquivoImagem ? (
                <Image
                  width="50%"
                  className="mb-4"
                  src={unit.urlS3Imagem}
                  fluid
                />
              ) : (
                ''
              )}
              <h3>Contato da Unidade</h3>
              <ul className="unit-social">
                <li>
                  <h5>
                    <FaPhoneAlt className="mr-3" size={20} />
                    {unit.telefone}
                  </h5>
                </li>
                <li>
                  <h5>
                    <FaEnvelope className="mr-3" size={20} />
                    {unit.email}
                  </h5>
                </li>
                <li>
                  <h5>
                    <FaMapMarkerAlt className="mr-3" size={20} />
                    {unit.endereco}
                  </h5>
                </li>
              </ul>
              <div className="unit-social">
                <li>
                  {unit.urlFacebook ? (
                    <a href={unit.urlFacebook} target="_blank" rel="noreferrer">
                      <FaFacebookF className="mr-3" size={28} />
                    </a>
                  ) : null}
                  {unit.urlFacebook ? (
                    <a
                      href={unit.urlInstagram}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram className="mr-3" size={28} />
                    </a>
                  ) : null}
                  {unit.urlSite ? (
                    <a href={unit.urlSite} target="_blank" rel="noreferrer">
                      <FaGlobe className="mr-3" size={28} />
                    </a>
                  ) : null}
                </li>
              </div>
            </Col>
          </Row>
          <Row className="form-search my-5">
          <IsacContractSelect
              title={'Instrumentos de Gestão'}
              onChange={handleInstruments}
              group={hiringInformation}
              data={managementContract}
              valid={true}
            />
          </Row>
          <Row className="form-search my-5">
            <IsacDocSelect
              title={groups[0]?.nome}
              onChange={handleChangeHiringInformationDocs}
              group={hiringInformation}
              data={hiringInformationDocs}
              idUnidade={idUnidade}
            />

            <IsacDocSelect
              title={groups[1]?.nome}
              onChange={handleChangeContractExecutionDocs}
              group={contractExecution}
              data={contractExecutionDocs}
              idUnidade={idUnidade}
            />
            <IsacDocSelect
              title={groups[2]?.nome}
              onChange={handleChangeAccountabilityDocs}
              group={accountability}
              data={accountabilityDocs}
              idUnidade={idUnidade}/>

              <IsacDocSelect
              title={groups[3]?.nome}
              onChange={handleChangeAccountingStatementsDocs}
              group={accountingStatements}
              data={accountingStatementsDocs}
              idUnidade={idUnidade}
            />
            <IsacDocSelect
              title={groups[4]?.nome}
              onChange={handleChangeGovernanceDocs}
              group={governance}
              data={governanceDocs}
              idUnidade={idUnidade}
            />

            <IsacDocSelect
              title={groups[5]?.nome}
              onChange={handleChangeReportingDocs}
              group={reporting}
              data={reportingDocs}
              idUnidade={idUnidade}
            />
            <IsacDocSelect
              title={groups[6]?.nome}
              onChange={handleChangeFinancialInformationDocs}
              group={financialInformation}
              data={financialInformationDocs}
              idUnidade={idUnidade}
            />
            {contratante.idArquivoImagem && (
              <Contractor
                logo={unit.contratante.urlS3}
              />
            )}
          </Row>
        </Container>
      )}
    </>
  );
}
