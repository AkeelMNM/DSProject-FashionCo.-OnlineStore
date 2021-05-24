import React, {Component} from 'react';
import TransportService from "../../service/TransportService";

import '../../styles/buyer/Transport.css';
import ViewProductsService from "../../service/ViewProductsService";
import Cookies from "universal-cookie/es6";
import NavMenu from "../NavMenu";
import ProductService from "../../service/ProductService";

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

class Transport extends Component {

    constructor(props){
        super(props);

        this.state = {
            Transport:[],
            name:'',
            address:'',
            city:'',
            postelCode:'',
            mobileNumber:''
        }
    }

    componentDidMount(){
        const cookies = new Cookies();
        const val = cookies.get('userID');

        /**
         * Checking the User is Login or Not
         * if user not login it will automatically redirect to login page else it will render the page
         */
        if(typeof val === 'undefined'){
            this.props.history.push('/');
        }else {
            TransportService.getTransportByUserId(cookies.get('userType')).then(res => {
                this.setState({Transport: res.data})
            })
        }
    }

    Checkout(event){
        event.preventDefault();
        const cookies = new Cookies();

        let CheckOut = {
            userID:cookies.get('userID'),
            name:this.state.name,
            address:this.state.address,
            city:this.state.city,
            postelCode:this.state.postelCode,
            mobileNumber:this.state.mobileNumber
        }

       if(this.state.name === ''){
            alert('Enter Name.. ');
        }else if(this.state.address === ''){
            alert('Enter Address.. ');
        } else if(this.state.city === ''){
            alert('Enter City.. ');
        }else if(this.state.postelCode === ''){
            alert('Enter postel code.. ');
        }else if(this.state.mobileNumber === ''){
            alert('Enter Mobile number.. ');
        }
        else{
            TransportService.AddTransport(CheckOut).then(res =>{
                this.props.history.push('/PaymentGateway');
          });
        }
    }

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }


    render() {
        const cookies = new Cookies;
        return <div>
            <NavMenu userType={cookies.get('userType')}/>
            <div className={"container"}>
                <div className={'form-style-checkout'}>

                    <form>
                        <div>
                            <h2> Where should we deliver your order? </h2>
                        </div>
                        <div>
                            <label htmlFor={'Name'}>Name: </label>
                            <input type={'text'} name={'name'} id={'name'} value={Transport.name} placeholder={'Name'} value={this.state.name}
                                   onChange={event => this.onChange(event)}/>
                        </div>
                        <div>
                            <label htmlFor={'Address'}>Address : </label>
                            <input type={'text'} name={'address'} id={'address'} placeholder={'Address'} value={this.state.address}
                                   onChange={event => this.onChange(event)}/>
                        </div>
                        <div>
                            <label htmlFor={'city'}>City : </label>
                            <input type={'text'} name={'city'} id={'city'} placeholder={'City'} value={this.state.city}
                                   onChange={event => this.onChange(event)}/>
                        </div>
                        <div>
                            <label htmlFor={'postelCode'}>Postel Code : </label>
                            <input type={'text'} name={'postelCode'} id={'postelCode'} placeholder={'Postel Code'} value={this.state.postelCode}
                                   onChange={event => this.onChange(event)}/>
                        </div>
                        <div>
                            <label htmlFor={'mobileNumber'}>Mobile Number : </label>
                            <input type={'text'} name={'mobileNumber'} id={'mobileNumber'} placeholder={'Mobile Number'} value={this.state.mobileNumber}
                                   onChange={event => this.onChange(event)}/>
                        </div>
                        <div>
                            <input type={'submit'} value={'Go to checkout'} onClick={event => this.Checkout(event)} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    }
}

export default Transport;
