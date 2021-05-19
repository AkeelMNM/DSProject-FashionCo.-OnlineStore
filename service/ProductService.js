import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/seller/products";
class ProductService{
    getproducts(){

        return axios.get(PRODUCT_API_BASE_URL);
    }

    createproduct(product){

        return axios.post(PRODUCT_API_BASE_URL,product);
    }

    getProducteById(productId){
        return axios.get(PRODUCT_API_BASE_URL + '/' + productId);
    }

    updatePRoduct(product, productId){
        return axios.put(PRODUCT_API_BASE_URL + '/' + productId, product);
    }

    deleteProduct(productId){
        return axios.delete(PRODUCT_API_BASE_URL + '/' + productId);
    }
    

}

export default new ProductService()