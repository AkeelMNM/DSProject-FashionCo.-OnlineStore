import axios from "axios";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

/**
 * this URL is to communicate directly with the backend
 */
const PAYMENT_GATEWAY_API_BASE_URL = "http://localhost:8080/payments/";

/**
 * This is the Web API URL exposed in WSO2 Enterprise Integration
 * Configure the ASSIGNED_IP_ADDRESS according to your IP Address and Port Number
 */
/*const ASSIGNED_IP_ADDRESS = 'http://172.18.1.33:8280';
const PAYMENT_GATEWAY_API_BASE_URL = ASSIGNED_IP_ADDRESS + "/onlinestore_payment/payments/";*/

class PaymentGatewayService{

    CardPayment(Payment){
        return axios.post( PAYMENT_GATEWAY_API_BASE_URL+'cardPayment', Payment )
            .then(response =>{
                if(response.data === "Payment Succeed"){
                    return response.data
                }else{
                    return response.data
                }

        }).catch(reason => {
            return reason;
        })
    }

    MobilePayment(Payment){
        return axios.post( PAYMENT_GATEWAY_API_BASE_URL+'mobilePayment', Payment)
            .then(response =>{
            if(response.data === "Payment added to your mobile bill"){
                return response.data
            }else{
                return response.data
            }

        }).catch(reason => {
            return reason;
        })
    }

}

export default new PaymentGatewayService();