import axios from 'axios';

const api = axios.create({
  baseURL: 'http:localhost:8080/products',
});

export const getAllProducts = () => api.get('/');
export const getProductById = (id) => api.get(`/${id}`);
export const createProduct = (product) => api.post('/', product);
export const updateProduct = (id, product) => api.put(`/${id}`, product);
export const deleteProduct = (id) => api.delete(`/${id}`);
 
export default api;
