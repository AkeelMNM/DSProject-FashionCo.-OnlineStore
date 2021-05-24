import React from "react";
import '../styles/UserProfile.css';
import UserAuthService from "../service/UserAuthService";
import Cookies from "universal-cookie/es6";
import NavMenu from "./NavMenu";


/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

class UserProfile extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            newName:'',
            NewEmail:'',
            password:'',
            rePassword:'',

            name:'',
            email:'',
            type:''
        }
    }

    componentDidMount() {
        const cookies = new Cookies();

        /**
         * Checking the User is Login or Not
         * if user not login it will automatically redirect to login page else it will render the page
        */
        const val = cookies.get('userID');
        if(typeof val === 'undefined'){
            this.props.history.push('/');
        }else{
            UserAuthService.getUserById(cookies.get('userID')).then( (res) =>{
                let user = res.data;
                this.setState({
                    name:user.username,
                    email:user.email,
                    type:user.type
                })
            })
        }
    }

    clearInputs(){
        this.setState({
            newName:'',
            NewEmail:'',
            password:'',
            rePassword:''
        })
    }


    changeUserDetails(event){
        event.preventDefault();

        let Account = {
            username:this.state.newName,
            password:this.state.password,
            email:this.state.NewEmail,
        }

        const cookies = new Cookies();
        const userID = cookies.get('userID');
        UserAuthService.updateAccount(userID, Account)
            .then(res =>{
                if(res.data === 'Email Change Successfully.'){
                    alert(res.data)
                }else if(res.data === 'Username Change Successfully.'){
                    alert(res.data)
                }else if(res.data === 'Password Change Successfully.'){
                    alert(res.data)
                }else if(res.data === 'Enter a New Password.'){
                    alert('Entered password is same old password '+res.data)
                }else {
                    alert('Something went wrong, try again!');
                }
            })
        this.clearInputs();
        setTimeout(function () {
            window.location.reload();
        }, 500);
    }

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    render() {
        const cookies = new Cookies();
        return <div>
            <div><NavMenu userType={cookies.get('userType')}/></div>
            <div>
                <label id={'usTitle'}>User Settings</label>
                <table id={'tableSt'}>
                    <thead>
                        <tr className={'trSt'}>
                            <th colSpan={2} className={'thSt'}>User Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={'trSt'}>
                            <td className={'tdSt'}>User Name : {this.state.name}</td>
                        </tr>
                        <tr className={'trSt'}>
                            <td className={'tdSt'}>User Email : {this.state.email}</td>
                        </tr>
                        <tr className={'trSt'}>
                            <td className={'tdSt'}>User Type : {this.state.type}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={'form-style-userPro'}>
                <form>
                    <div>
                        <label htmlFor={'newName'}>Change Username</label>
                        <input type={'text'} name={'newName'} id={'newName'} value={this.state.newName} placeholder={'Enter New Username'}
                               onChange={event => this.onChange(event)}/>

                        <input type={'submit'} value={'Change Username'} onClick={event => this.changeUserDetails(event)} />
                    </div>
                </form>
                <form>
                    <div>
                        <br/>
                        <label htmlFor={'NewEmail'}>Change Email</label>
                        <input type={'text'} name={'NewEmail'} id={'NewEmail'}  value={this.state.NewEmail} placeholder={'Enter New Email'}
                               onChange={event => this.onChange(event)}/>

                        <input type={'submit'} value={'Change Email'} onClick={event => this.changeUserDetails(event)} />
                    </div>
                </form>
                <form>
                    <div>
                        <br/>
                        <label htmlFor={'password'}>Change Password</label>
                        <input type={'password'} name={'password'} id={'password'} value={this.state.password} placeholder={'Enter New Password'}
                               onChange={event => this.onChange(event)}/>
                    </div>
                    <div>
                        <input type={'submit'} value={'Change Password'} onClick={event => this.changeUserDetails(event)} />
                    </div>
                </form>
            </div>
        </div>
    }
}

export default UserProfile;
