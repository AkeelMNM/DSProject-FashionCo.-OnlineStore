import React from "react";
import "../styles/HeaderFooter.css";
import shoppingCart from "url:../images/shopping-cart.png"
import Cookies from "universal-cookie/es6";
import {withRouter} from "react-router-dom";
import PurchaseHistory from "./buyer/PurchaseHistory";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

class NavMenu extends React.Component{
    constructor(props) {
        super(props);

    }

    logout(event){
        event.preventDefault()
        const cookies = new Cookies();
        cookies.remove('userID');
        cookies.remove('userType');
        this.props.history.push('/');
    }

    renderBuyerMenu(){
        return <ul>
            <li><a href="/ViewProducts">Home</a></li>
            <li><a href="/PurchaseHistory">Purchase History</a></li>
            <li><a href="/UserProfile">UserProfile</a></li>
            <button id={'logout'} onClick={event => this.logout(event)}>Logout</button>
            <a href="/ShoppingCart"><img src={shoppingCart} id={'imgShop'} title={'Shopping Cart'}/></a>
        </ul>
    }

    renderSellerMenu(){
        return <ul>
            <li><a href="/ListProducts">Products List</a></li>
            <li><a href="/AddProducts">Add Products</a></li>
            <li><a href="/UserProfile">UserProfile</a></li>
            <button id={'logout'} onClick={event => this.logout(event)}>Logout</button>
        </ul>
    }

    render() {
        const {userType} = this.props;
        return <div className={'navMenu'}>
                <div id={'menu'}>
                    {
                        userType === 'seller'? (this.renderSellerMenu())
                        :userType === 'buyer' ? (this.renderBuyerMenu())
                        :(<></>)
                    }
                </div>
        </div>
    }
}

export default withRouter(NavMenu);
