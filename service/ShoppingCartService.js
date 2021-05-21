import axios from 'axios';

const ShoppingCartService_API_BASE_URL = "http://localhost:8080/shoppingCart/";

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

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