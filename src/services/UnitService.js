import api from './api';
class UnitService {
  getAll() {
    return api.get('ap/unidades/todas');
  }

  getAllCovid() {
    return api.get('ap/unidades/todas/covid');
  }

  getInvalidUnitsCovid() {
    return api.get('ap/unidades/todas/covid/encerradas');
  }

  getValidUnit() {
    return api.get('ap/unidades/validas')
  }

  getInvalidUnit() {
    return api.get('ap/unidades/invalidas')
  }

  get(id) {
    return api.get(`ap/unidade/${id}`);
  }

  getDocsByIdAndContract(idUnidade, idContrato) {
    return api.get(`/ap/arquivos/todosUnidadeAndContratoByGrupo/${idUnidade}/${idContrato}`)
  }

  getDocs(id) {
    return api.get(`ap/arquivos/todosUnidadePorGrupo/${id}`);
  }

  getDocByContract(id, grupo, tipo, ano) {
    return api.get(`ap/arquivos/byUnidadeAndContratoVigente/${id}/${grupo}/${tipo}/${ano}`)
  }

  getFinishedDocByContract(idUnidade, grupo, idContrato, tipoDoc, ano) {
    return api.get(`/ap/arquivos/byUnidadeAndContratoEncerrado/${idUnidade}/${grupo}/${idContrato}/${tipoDoc}/${ano}`)
  }

  getUnitUf(uf) {
    return api.get(`ap/unidades/porUF/${uf}`);
  }
  getUnitFiles(unitId, docId) {
    return api.get(`ap/arquivos/porUnidade/${unitId}/${docId}`);
  }

  getAllType() {
    return api.get(`/tiposArquivos`);
  }

  getTypeOfFiles() {
    return api.get(`tiposArquivos`);
  }

  getUF() {
    return api.get('/ap/unidades/porUF/DF');
  }

  getUnitsTypes() {
    return api.get('tiposUnidades');
  }

  getActiveManagementContract(id) {
    return api.get(`/ap/unidades/contratoVigente/${id}`)
  }

  getFinishedManagementContract(id) {
    return api.get(`/ap/unidades/contratosEncerrados/${id}`)
  }

  delete(id) {
    return api.delete(`unidade/${id}`);
  }
}

export default new UnitService();
