import React from "react";
import '../../styles/transactions/Payment.css';
import Cookies from "universal-cookie/es6";
import PaymentGatewayService from "../../service/PaymentGatewayService";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

class MobilePayment extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            mobileOwner:'',
            mobileNo:'',
            payDate:'',
            mobileCompany:''
        }
    }

    payMobile(event){
        event.preventDefault();
        const cookies = new Cookies();

        let Payment = {
            userId:cookies.get('userID'),
            ownerName:this.state.mobileOwner,
            mobileNo:this.state.mobileNo,
            mobileCompany:this.state.mobileCompany,
            payDate:this.state.payDate
        }

        if(this.state.mobileOwner === ''){
            alert('Enter mobile number owner name');
        }else if(this.state.mobileNo === ''){
            alert('Enter mobile number');
        } else if(this.state.mobileCompany === ''){
            alert('Select the vendor');
        }else if(this.state.payDate === ''){
            alert('Enter billing date');
        }else{
            PaymentGatewayService.MobilePayment(Payment)
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
                        <label htmlFor={'mobileOwner'}>Mobile Number Owner</label>
                        <input type={'text'} name={'mobileOwner'} id={'mobileOwner'} placeholder={'Name'} value={this.state.mobileOwner}
                               onChange={event => this.onChange(event)}/>
                    </div>
                    <div>
                        <label htmlFor={'mobileCompany'}>Service Provider</label>
                        <select id="mobileCompany" name="mobileCompany" value={this.state.mobileCompany} onChange={event => this.onChange(event)}>
                            <option>Select</option>
                            <option value="dialog">Dialog</option>
                            <option value="mobitel">Mobitel</option>
                            <option value="slt">SLT</option>
                            <option value="airtel">Airtel</option>
                            <option value="hutch">Hutch</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor={'mobileNo'}>Mobile Number</label>
                        <input type={'text'} name={'mobileNo'} id={'mobileNo'} placeholder={'Valid Phone Number'} value={this.state.mobileNo}
                               onChange={event => this.onChange(event)}/>
                    </div>
                    <div>
                        <label htmlFor={'payDate'}>Payment Date</label>
                        <input type={'date'} name={'payDate'} id={'payDate'} value={this.state.payDate}
                               onChange={event => this.onChange(event)}/>
                    </div>
                    <div>
                        <input type={'submit'} value={'Make Payment'} onClick={event => this.payMobile(event)} />
                    </div>
                </form>
            </div>
        </div>
    }
}

export default MobilePayment;