import axios from 'axios';

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */


/**
 * this URL is to communicate directly with the backend
 */
//const ShoppingCartService_API_BASE_URL = "http://localhost:8080/shoppingCart/";

/**
 * Configure the ASSIGNED_IP_ADDRESS according to your IP Address
 */
const ASSIGNED_IP_ADDRESS = 'http://172.18.1.33:8280';
const ShoppingCartService_API_BASE_URL = ASSIGNED_IP_ADDRESS + "/onlinestore_shoppingcart/shoppingCart/";



class ShoppingCartService{

    AddShoppingCart(Shopping){
        return axios.post(ShoppingCartService_API_BASE_URL+'add',Shopping).then(response =>{
            if (response.data === "ShoppingCart Added"){
                return response.data
            }else{
                return response.data
            }
        }).catch(reason => {
            return reason;
        })
    }

    getShoppingCartById(userId){
        return axios.get(ShoppingCartService_API_BASE_URL+'getProducts/'+userId).then(response =>{
            if(response.status === 200){
                return response;
            }
        }).catch(response =>{
            return response;
        })
    }

    removeProduct(productId){
        return axios.delete(ShoppingCartService_API_BASE_URL + 'removeProducts/' + productId);
    }


}

export default new ShoppingCartService();