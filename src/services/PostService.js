import api from './strapiApi';
class PostService {
  getAll() {
    return api.get('posts');
  }

  getLastTwo() {
    return api.get('posts?_sort=created_at:DESC&_limit=2')
  }

  getPage(page) {
    return api.get(`posts?_sort=created_at:DESC&_start=${page}&_limit=4`);
  }

  get(id) {
    return api.get(`posts/${id}`);
  }

  getSlug(slug) {
    return api.get(`posts?slug=${slug}`);
  }
}

export default new PostService();
