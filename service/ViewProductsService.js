import axios from 'axios';

const ViewProductsService_API_BASE_URL = "http://localhost:8080/shoppingCart/";
const Search_API_BASE_URL = "http://localhost:8080/search/get/";

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

class ViewProductsService{

    //get Products
    getProducts(){
        return axios.get(ViewProductsService_API_BASE_URL+'getProducts').then(response =>{
            if(response.status === 200){
                return response;
            }
        }).catch(response =>{
            return response;
        })
    }

    //Search Product by name or brand or price
    SearchProduct(ProductName){
        return axios.get(Search_API_BASE_URL+ProductName).then(response =>{
            if(response.status === 200){
                return response;
            }
        }).catch(response =>{
            return response;
        })
    }


}

export default new ViewProductsService();