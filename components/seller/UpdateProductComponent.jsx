import React, { Component } from 'react';
import ProductService from '../../service/ProductService';
import '../../styles/seller/Products.css';

class UpdateProductComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id:this.props.match.params.id,
            productName:'',
            productBrand:'',
            productCategory:'',
            productPrice:'',
            productSize:'',
            discription:''
        }

        this.updateProduct = this.updateProduct.bind(this);

    }

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    componentDidMount(){
        ProductService.getProducteById(this.state.id).then(res => {
            let product = res.data;
            this.setState({productName: product.productName,
                productBrand: product.productBrand,
                productCategory : product.productCategory,
                productPrice: product.productPrice,
                productSize : product.productSize,
                discription : product.discription

            });
        });
    }

    updateProduct(e){
        e.preventDefault();
        let product ={
            productName: this.state.productName,
            productBrand: this.state.productBrand,
            productCategory: this.state.productCategory,
            productPrice: this.state.productPrice,
            productSize: this.state.productSize,
            discription: this.state.discription
        };

        ProductService.updatePRoduct(product, this.state.id).then( res => {
            this.props.history.push('/ListProducts');
        });
        
    }

    cancel(){
        this.props.history.push('/ListProducts');
    }

    render() {
        return (
            <div>
                <div className="container"> 
                    <div className="row" > 
                        <div className="card col-md-6 offset-md-3 offset-md-3" >
                            <h3 className="text-center"> Update Product</h3>
                                <div className="card-body"> 
                                    <form> 
                                        <div className="form-group"> 
                                            <label> Product Name :</label>
                                            <input placeholder="Product Name" name="productName" className="form-control"
                                            value={this.state.productName} onChange ={event=>this.onChange(event)}/>
                                        </div>
                                        <div className="form-group"> 
                                        <label> Product Brand :</label>
                                        <input placeholder="Product Brand" name="productBrand" className="form-control"
                                        value={this.state.productBrand} onChange ={event=>this.onChange(event)}/>
                                        <div className="form-group"> 
                                            <label>Product Category :</label>
                                            <input placeholder="Product Category" name="productCategory" className="form-control"
                                            value={this.state.productCategory} onChange ={event=>this.onChange(event)}/> 
                                        
                                        </div>
                                        <div className="form-group"> 
                                            <label>Product Price :</label>
                                            <input placeholder="Product Price" name="productPrice" className="form-control"
                                            value={this.state.productPrice} onChange ={event=>this.onChange(event)}/>
                                        </div>

                                        <div className="form-group"> 
                                            <label>Product Size :</label>
                                            <input placeholder="Product Size" name="productSize" className="form-control"
                                            value={this.state.productSize} onChange ={event=>this.onChange(event)}/>
                                        </div>

                                        <div className="form-group"> 
                                            <label>Discription:</label>
                                            <input placeholder="Discription" name="discription" className="form-control"
                                            value={this.state.discription} onChange ={event=>this.onChange(event)}/> 
                                        
                                        </div>


                                        
                                    
                                            <button className="btn btn-success" onClick = {this.updateProduct}> Save </button>
                                            <button className="btn btn-danger" onClick = {this.cancel.bind(this)} style ={{marginLeft: "10px"}}> Cancel </button>


                                            </div>
                                    </form>
                                
                                     
                              
                                </div>
                       </div>
                
                    </div>
                </div>
            </div>
        )
    }
}



export default UpdateProductComponent;