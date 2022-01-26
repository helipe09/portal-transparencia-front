import api from './strapiApi';
class BannerService {
  get() {
    return api.get('carroussels');
  }
}

export default new BannerService();
