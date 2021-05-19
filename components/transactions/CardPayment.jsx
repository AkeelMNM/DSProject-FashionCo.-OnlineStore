import React from "react";
import '../../styles/transactions/Payment.css';
import PaymentGatewayService from "../../service/PaymentGatewayService";
import Cookies from "universal-cookie/es6";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

class CardPayment extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            cardOwner:'',
            cardNo:'',
            exDate:'',
            cvv:''
        }
    }

    payCard(event){
        event.preventDefault();
        const cookies = new Cookies();

        let Payment = {
            userId:cookies.get('userID'),
            cardName:this.state.cardOwner,
            cardNo:this.state.cardNo,
            expDate:this.state.exDate,
        }
        console.log(cookies.get('userID'));

        if(this.state.cardOwner === ''){
            alert('Enter card  owner name');
        }else if(this.state.cardNo === ''){
            alert('Enter card number');
        }else if(this.state.exDate === ''){
            alert('Enter card expiry date');
        }else{
            PaymentGatewayService.CardPayment(Payment)
                .then(res =>{
                    alert(res);
                })
        }
    }

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }
    render() {
        return <div>
            <div className={'form-style-pay'}>
                <form>
                    <div>
                        <label htmlFor={'cardOwner'}>Card Owner</label>
                        <input type={'text'} name={'cardOwner'} id={'cardOwner'} placeholder={'Name'} value={this.state.cardOwner}
                               onChange={event => this.onChange(event)}/>
                    </div>
                    <div>
                        <label htmlFor={'cardNo'}>Card Number</label>
                        <input type={'text'} name={'cardNo'} id={'cardNo'} placeholder={'Valid Card Number'} value={this.state.cardNo}
                               onChange={event => this.onChange(event)}/>
                    </div>
                    <div>
                        <label htmlFor={'exDate'}>Expiration Date</label>
                        <input type={'text'} name={'exDate'} id={'exDate'} placeholder={'MM/YY'} value={this.state.exDate}
                               onChange={event => this.onChange(event)}/>
                    </div>
                    <div>
                        <label htmlFor={'cvv'}>CVV Code</label>
                        <input type={'text'} name={'cvv'} id={'cvv'} placeholder={'CVV'} value={this.state.cvv}
                               onChange={event => this.onChange(event)}/>
                    </div>
                    <div>
                        <input type={'submit'} value={'Make Payment'} onClick={event => this.payCard(event)} />
                    </div>
                </form>
            </div>
        </div>
    }
}

export default CardPayment;