import React from 'react';
import ShoppingCartService from "../../service/ShoppingCartService";

//Css
import '../../styles/buyer/ShoppingCart.css';

//Images
import NavMenu from "../NavMenu";
import Cookies from "universal-cookie/es6";
import ProductService from "../../service/ProductService";

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

class ShoppingCart extends React.Component{
    constructor(props){
        super(props);

        this.state={
            ShoppingCart:[],
        }
        // this.NumberHandling = this.NumberHandling.bind(this);
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
            ShoppingCartService.getShoppingCartById(cookies.get('userID')).then(res => {
                this.setState({ShoppingCart: res.data})
            })
        }
    }

    removeProduct(id){
        ShoppingCartService.removeProduct(id).then( res => {
            this.setState({ShoppingCart: this.state.ShoppingCart.filter(product => product.id !== id)});
        });
    }

    buy(event){
        this.props.history.push('/Transport');
    }

    render(){

        const cookies = new Cookies;
        let total = 0;
        let shippingCharge = 300;
        this.state.ShoppingCart.map(cart =>{
            let subTotal = 0 ;
            subTotal = cart.price * cart.qty;
            total = total + subTotal;
        });

        return <div>
            <NavMenu userType={cookies.get('userType')}/>
            <div className={'cart-container'} >
                <div className={'cart-page'}>

                    <table className={"Tbl-ShoppingCart"}>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.ShoppingCart.map(cart =>{
                                    let subtotal = 0 ;
                                    subtotal = cart.price * cart.qty;

                                    return <tr>
                                        <td>
                                            <div className={'cart-info'}>
                                                <img src={`data:image/jpg;base64,${cart.image}`} id="sImage" alt={"product-image"} />
                                                <div>
                                                    <p className={"Sc-name"} > {cart.name} </p>
                                                    <p className={"Sc-size"} >Size: {cart.size}</p>
                                                    <p className={"Sc-price"} > Rs.{cart.price}.00 </p>

                                                    <button onClick = {() => this.removeProduct(cart.id)} className={"cart-remove-btn"}>Remove </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td><input type={'number'} value={cart.qty} /></td>
                                        <td>
                                            <p className={"Sc-subtotal"} >Rs.{subtotal}.00 </p>
                                        </td>
                                </tr>
                                })
                            }
                        </tbody>
                    </table>

                    <div className={'total-price'}>
                        <table>
                            <tr>
                                <td>Subtotal</td>
                                <td className={'Sc-subtotal'}>Rs.{total}.00 </td>
                            </tr>
                            <tr>
                                <td>Shipping Charge</td>
                                <td className={'Sc-subtotal'}>Rs.{shippingCharge}.00</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td className={'Sc-subtotal'}>Rs.{total+shippingCharge}.00</td>
                            </tr>
                            <tr>
                                <button className={"buy-btn"} onClick={event => this.buy(event)} > Buy </button>
                                {/*<input type={'submit'} value={'Buy'} onClick={his.buy.bind(this)} />*/}
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    }


}

export default ShoppingCart;