import axios from 'axios';

const TransportService_API_BASE_URL = "http://localhost:8080/transport/";

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

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