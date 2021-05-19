/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */
import axios from "axios";

const PAYMENT_GATEWAY_API_BASE_URL = "http://localhost:8080/payments/";

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