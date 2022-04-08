import {Axios} from './Axios';
function getProductDetail(id) {
    return Axios.get(`products/${id}`);
}

export const productServices = {
    getProductDetail
};