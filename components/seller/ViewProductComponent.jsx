import React, { Component } from 'react';
import ProductService from '../../service/ProductService';
import '../../styles/seller/Products.css';

class ViewProductComponent extends Component {

    constructor(props){

        super(props)
        this.state={
            id: this.props.match.params.id,
            products: {}


        }
    }
        componentDidMount(){
            ProductService.getProducteById(this.state.id).then( res => {
                this.setState({products: res.data});
                
            })
        }
    
    render() {
        return (
            <div>
            <br></br>
            <div className = "card col-md-6 offset-md-3">
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
            </div>
        );
    }
}

export default ViewProductComponent;