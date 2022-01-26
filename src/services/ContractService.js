import api from './api';
class ContractService {

  get() {
    return api.get("ap/contratantes");
  }


  getId(id) {
    return api.get(`ap/contratantes/${id}`);
  }

}

export default new ContractService();