import axios from 'axios';

/**
 * @author : M.A.M Nusky
 * Registration Number : IT19167442
 */

//const PRODUCT_API_BASE_URL = "http://localhost:8080/seller/products";

/**
 * Configure the ASSIGNED_IP_ADDRESS according to your IP Address
 */
const ASSIGNED_IP_ADDRESS = 'http://172.17.221.209:8280';
const PRODUCT_API_BASE_URL = ASSIGNED_IP_ADDRESS + "/onlinestore_product/seller/products";

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
