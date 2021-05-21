import React from "react";
import CardPayment from "./CardPayment";
import '../../styles/transactions/Payment.css';
import ItemDisplay from "./ItemDisplay";
import {Link} from "react-router-dom";
import MobilePayment from "./MobilePayment";
import NavMenu from "../NavMenu";
import Cookies from "universal-cookie/es6";
import ShoppingCartService from "../../service/ShoppingCartService";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

class PaymentGateway extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            items:[],
            payType:'card'
        }

    }

    componentDidMount() {
        const cookies = new Cookies();
        const val = cookies.get('userID');

        /**
         * Checking the User is Login or Not
         * if user not login it will automatically redirect to login page else it will render the page
         */
        if(typeof val === 'undefined'){
            this.props.history.push('/');
        }else{
            ShoppingCartService.getShoppingCartById(cookies.get('userID')).then(res=>{
                this.setState({items : res.data})
            })
        }
    }

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    render() {
        const cookies = new Cookies();
        return <div>
            <NavMenu userType={cookies.get('userType')}/>
            <div className={'big-style-div'}>
                <label id={'headLine'}>Payment Gateway</label><br/>
                <div id={'radioDiv'}>
                    <form>
                    <label>Select Payment Type :</label>
                    <input type={'radio'} name={'payType'} id={'payType'} value={'card'} checked={this.state.payType === 'card'}
                           onChange={event => this.onChange(event)}/> Card Payment
                    <input type={'radio'} name={'payType'} id={'payType'} value={'mobile'} checked={this.state.payType === 'mobile'}
                           onChange={event => this.onChange(event)}/>Mobile Payment
                    </form>
                </div>
                <div id={'div1'}>
                    {
                        this.state.payType === 'mobile' ? <MobilePayment/> :
                        this.state.payType === 'card' ? <CardPayment/>
                        :<></>
                    }
                </div>
                <div id={'div2'}>
                    <ItemDisplay items={this.state.items}/>
                </div>
            </div>
        </div>
    }
}

export default PaymentGateway;