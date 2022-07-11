import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from '../Shared/loading';
import UnitInfo from '../Shared/unitInfos';
import UnitService from '../../services/UnitService';
import { Container, Row } from 'react-bootstrap';
import TesteSelect from '../TesteSelect/TesteSelect';
import IsacDocSelect from '../IsacDocSelect/IsacDocSelect';
import '../../styles/unit.css';

export default function NovaPaginaComponent(props) {
  const [UnitData, setUnitData] = useState();
  const [idUnit, setIdUnit] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadingSelectContract, setLoadingSelectContract] = useState(true);
  const [loadingSelects, setloadingSelects] = useState(true);
  const [managementContract, setManagementContract] = useState('');
  const [teste, setTeste] = useState(true);
  const [idContrato, setIdContrato] = useState(
    'Selecione o Contrato de Gestão'
  );
  const [grupos, setGrupos] = useState();
  const [touchDocSelect, setTouchDocSelect] = useState(0);

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

  // Chama as informações da Unidade quando a página é carregada, exemplo: Nome, Resumo, redes sociais etc.
  useEffect(() => {
    const id = props.match.params.id;
    setIdUnit(id);
    UnitService.get(id).then((response) => {
      setUnitData(response?.data);
      setLoading(false);
    });
    UnitService.getFinishedManagementContract(id).then((results) => {
      console.log('management contracts', results.data);
      setManagementContract(results?.data);
      setLoadingSelectContract(false);
    });
  }, []);

  // É acionado quando o seletor de contrato é alterado
  useEffect(() => {
    UnitService.getDocsByIdAndContract(idUnit, idContrato).then((response) => {
      setGrupos(response.data.grupos);
      setHiringInformation(response.data.grupos[0]?.tiposDocumentos);
      setContractExecution(response.data.grupos[1]?.tiposDocumentos);
      setAccountability(response.data.grupos[2]?.tiposDocumentos);
      setAccountingStatements(response.data.grupos[3]?.tiposDocumentos);
      setGovernance(response.data.grupos[4]?.tiposDocumentos);
      setReporting(response.data.grupos[5]?.tiposDocumentos);
      setFinancialInformation(response.data.grupos[6]?.tiposDocumentos);
      console.log(
        'testando os docs =>',
        response.data.grupos[0]?.tiposDocumentos
      );
    });
  }, [idContrato]);

  function changingContract(event) {
    setTouchDocSelect(1);
    setloadingSelects(true);
    setIdContrato(event.target.value);
    console.log(event.target.value);
    setTimeout(() => {
      setloadingSelects(false);
    }, 3000);
  }

  function handleChangeHiringInformationDocs(event) {
    console.log('handle teste =>', event);
  }

  function handleChangeHiringInformationDocs(event) {
    const value = +event.target.value;
    console.log('handleHiring', value);
    if (value === 0) {
      setHiringInformationDocs('');
    } else {
      let finalData = hiringInformation.filter((item) => item.id === value);
      setHiringInformationDocs(finalData[0].documentos);
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
      console.log('Documentos de Governançaß', governanceDocs);
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

  return (
    <>
      <Container>
        <div className='content mb-4'>
          {loading ? <Loading /> : <UnitInfo data={UnitData} />}
        </div>
        <div className='select'>
          <Row className='form-search my-5'>
            {loadingSelectContract ? (
              <Loading />
            ) : (
              <TesteSelect
                data={managementContract}
                onChange={changingContract}
              />
            )}
          </Row>
          <div className='line mb-4'></div>
          {loadingSelects ? (
            <>
              {idContrato == 'Selecione o Contrato de Gestão' ? null : (
                <Loading />
              )}
            </>
          ) : (
            <>
              {grupos && idContrato != 'Selecione o Contrato de Gestão' ? (
                <Row className='form-search my-5'>
                  <IsacDocSelect
                    title={grupos[0]?.nome}
                    onChange={handleChangeHiringInformationDocs}
                    group={hiringInformation}
                    data={hiringInformationDocs}
                  />

                  <IsacDocSelect
                    title={grupos[1]?.nome}
                    onChange={handleChangeContractExecutionDocs}
                    group={contractExecution}
                    data={contractExecutionDocs}
                  />
                  <IsacDocSelect
                    title={grupos[2]?.nome}
                    onChange={handleChangeAccountabilityDocs}
                    group={accountability}
                    data={accountabilityDocs}
                  />
                  <IsacDocSelect
                    title={grupos[3]?.nome}
                    onChange={handleChangeAccountingStatementsDocs}
                    group={accountingStatements}
                    data={accountingStatementsDocs}
                  />
                  <IsacDocSelect
                    title={grupos[4]?.nome}
                    onChange={handleChangeGovernanceDocs}
                    group={governance}
                    data={governanceDocs}
                    year={true}
                  />

                  <IsacDocSelect
                    title={grupos[5]?.nome}
                    onChange={handleChangeReportingDocs}
                    group={reporting}
                    data={reportingDocs}
                    year={true}
                  />
                  <IsacDocSelect
                    title={grupos[6]?.nome}
                    onChange={handleChangeFinancialInformationDocs}
                    group={financialInformation}
                    data={financialInformationDocs}
                    year={true}
                  />
                </Row>
              ) : null}
            </>
          )}
        </div>
      </Container>
    </>
  );
}
