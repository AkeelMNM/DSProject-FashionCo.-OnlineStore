import React from 'react';
import '../../styles/transactions/LoginRegister.css';
import UserAuthService from '../../service/UserAuthService';
import Cookies from 'universal-cookie/es6';
import {Link} from "react-router-dom";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

class Login extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    loginAccount(event){
        event.preventDefault();

         let User = {
             email:this.state.email,
             password:this.state.password
         }

         UserAuthService.loginAccount(User).then(res =>{
             if(res.status === 200){
                 alert("Login Successful")
                 const [userID,type] = res.data.split('~');
                 const cookies = new Cookies();
                 cookies.set('userID',userID,{ path: '/' });
                 cookies.set('userType',type,{ path: '/' });


                if(type === 'seller'){
                     this.props.history.push("/ListProducts")
                 }else if (type === 'buyer'){
                     this.props.history.push("/PaymentGateway")//("/ViewProducts")
                 }

             }else{
                 alert('Username or Password Incorrect');
             }
         })
    }

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    render() {
        return <div>
            <div className={'form-style-logReg'}>
                <label id={'logRegHead'}>SignIn</label><br/>
                <form>
                    <div>
                        <label htmlFor={'email'}>Email</label>
                        <input type={'text'} name={'email'} id={'email'}  value={this.state.email}
                               onChange={event => this.onChange(event)}/>
                    </div>
                    <div>
                        <label htmlFor={'cv'}>Password</label>
                        <input type={'password'} name={'password'} id={'password'} value={this.state.password}
                               onChange={event => this.onChange(event)}/>
                    </div>
                    <div>
                        <input type={'submit'} value={'Login'} onClick={event => this.loginAccount(event)} />
                    </div><br/>
                    <div>
                        <label id={'crtLabel'}>Don't have an account? </label><Link id={'linkC'} to={'/Register'}>Create Account</Link>
                    </div>
                </form>
            </div>
            <div style={{height:'138px'}}></div>
        </div>
    }
}

export default Login;