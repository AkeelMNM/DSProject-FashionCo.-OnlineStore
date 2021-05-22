import axios from 'axios';

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

/**
 * this URL is to communicate directly with the backend
 */
//const TransportService_API_BASE_URL = "http://localhost:8080/transport/";

/**
 * Configure the ASSIGNED_IP_ADDRESS according to your IP Address
 */
const ASSIGNED_IP_ADDRESS = 'http://172.17.221.209:8280';
const TransportService_API_BASE_URL = ASSIGNED_IP_ADDRESS + "/onlinestore_transport/transport/";


class TransportService{

    AddTransport(CheckOut){
        return axios.post(TransportService_API_BASE_URL+'add',CheckOut).then(response =>{
                if (response.data === "Transport Added"){
                    return response.data
                }else{
                    return response.data
                }
            }).catch(reason => {
            return reason;
        })
    }

    getTransportByUserId(userId){
        return axios.get(TransportService_API_BASE_URL+'getTransport'+userId).then(response =>{
            if(response.status === 200){
                return response;
            }
        }).catch(response =>{
            return response;
        })
    }


}
export default new TransportService();