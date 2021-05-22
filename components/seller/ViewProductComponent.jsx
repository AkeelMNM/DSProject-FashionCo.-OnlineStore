import React, { Component } from 'react';
import ProductService from '../../service/ProductService';
import '../../styles/seller/Products.css';
import Cookies from "universal-cookie/es6";
import NavMenu from "../NavMenu";

/**
 * @author : M.A.M Nusky
 * Registration Number : IT19167442
 */

class ViewProductComponent extends Component {

    constructor(props){

        super(props)
        this.state={
            id: this.props.match.params.id,
            products: {}


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
            ProductService.getProducteById(this.state.id).then(res => {
                this.setState({products: res.data});

            })
        }
    }
    
    render() {
        const cookies = new Cookies();
        return <div>
            <NavMenu userType={cookies.get('userType')}/>
            <div className = "card2 col-md-6 offset-md-3">
                <h3 className = "text-center"> View Product Details</h3>
                <div className = "card-body">
                        <div className = "row">
                            <label> Product Name: </label>
                            <div> { this.state.products.productName}</div>
                        </div>

                        <div className = "row">
                            <label>Product Brand :</label>
                            <div> { this.state.products.productBrand }</div>
                        </div>

                        <div className = "row">
                            <label> Product Category :</label>
                            <div> { this.state.products.productCategory }</div>
                        </div>

                        <div className = "row">
                            <label> Product Price : </label>
                            <div> { this.state.products.productPrice }</div>
                        </div>

                        <div className = "row">
                            <label> Product Size :</label>
                            <div> { this.state.products.productSize }</div>
                        </div>

                        <div className = "row">
                            <label> Description :</label>
                            <div> { this.state.products.discription}</div>
                        </div>

                        <div className = "row">
                        <label> Image :</label>

                        <div> <img src={`data:image/jpg;base64,${this.state.products.image}`} id="sImage1" /></div>
                    </div>
                </div>
            </div>
                <div style={{marginTop:'68px'}}></div>
            </div>
    }
}

export default ViewProductComponent;