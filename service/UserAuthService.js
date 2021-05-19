import axios from "axios";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

const USER_AUTH_API_BASE_URL = "http://localhost:8080/users/";

const header = {'Access-Control-Allow-Origin': 'http://localhost:8080',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
}

class UserAuthService{

    createAccount(Account){
        return axios.post(USER_AUTH_API_BASE_URL+'register', Account)
            .then(response => {
            console.log(response.status);
            if(response.data === "Account Created"){
                return 'Registered';
            }
        }).catch(reason => {
            return reason;
        })
    }

    loginAccount(Account){
        return axios.post(USER_AUTH_API_BASE_URL+'login',Account)
            .then(response =>{
            console.log(response.status);
            if(response.status === 200){
                return response;
            }
        }).catch(reason => {
                return reason;

        })
    }

    updateAccount(userID,Account){
        return axios.put(USER_AUTH_API_BASE_URL+'update/'+userID,Account)
            .then(response =>{
                if(response.status === 200){
                    return response;
                }
            }).catch(response =>{
                return response;
            })
    }

    getUserById(userID){
        return axios.post(USER_AUTH_API_BASE_URL+'getUser/'+userID)
            .then(response =>{
                if(response.status === 200){
                    return response;
                }
            }).catch(response =>{
                return response;
            })
    }
}

export default new UserAuthService();