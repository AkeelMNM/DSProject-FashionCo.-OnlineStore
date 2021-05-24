import React, { Component } from 'react';
import ProductService from '../../service/ProductService';
import Cookies from "universal-cookie/es6";
import NavMenu from "../NavMenu";
import '../../styles/seller/Products.css';
import ShoppingCartService from "../../service/ShoppingCartService";

/**
 * @author : M.A.M Nusky
 * Registration Number : IT19167442
 */


class CreateProductComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            id: this.props.match.params.id,
            productName:'',
            productBrand:'',
            productCategory:'',
            productPrice:'',
            productSize:'',
            discription:'',
            Image:''
        }

        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeProductBrandHandler = this.changeProductBrandHandler.bind(this);
        this.changeProductCategoryHandler = this.changeProductCategoryHandler.bind(this);
        this.changeProductPriceHandler = this.changeProductPriceHandler.bind(this);
        this.changeProductSizeHandler = this.changeProductSizeHandler.bind(this);
        this.changeProductDiscriptionHandler = this.changeProductDiscriptionHandler.bind(this);
        this.changeProductImageHandler = this.changeProductImageHandler.bind(this);
        this.saveProduct = this.saveProduct.bind(this);

      
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
            return
        }
    }

    saveProduct(e){

        e.preventDefault();
        let product = {
            productName: this.state.productName,
            productBrand: this.state.productBrand,
            productCategory: this.state.productCategory,
            productPrice: this.state.productPrice,
            productSize: this.state.productSize,
            discription: this.state.discription,
            Image: this.state.Image
        };

        ProductService.createproduct(product).then(res =>{
            this.props.history.push('/ListProducts');
        });

    }

    changeProductNameHandler(event){
        this.setState({productName: event.target.value});
    }
    changeProductBrandHandler(event){
        this.setState({productBrand: event.target.value});
    }
    changeProductCategoryHandler(event){
        this.setState({productCategory: event.target.value});
    }
    changeProductPriceHandler(event){
        this.setState({productPrice: event.target.value});
    }
    changeProductSizeHandler(event){
        this.setState({productSize: event.target.value});
    }
    changeProductDiscriptionHandler(event) {
        this.setState({discription: event.target.value});
    }

    changeProductImageHandler (event) {
        this.setState({Image: event.target.value});
    }
    cancel(){
        this.props.history.push('/products');
    }
    
    getTitle(){
            return <h3 className="text-center">Add Product</h3>
    }

    render() {
        const cookies = new Cookies();
        return <div>
            <NavMenu userType={cookies.get('userType')}/>
            <div>
            <br></br>
                <div className="container"> 
                    <div className="row" > 
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        {
                            this.getTitle()
                        }


                                <div className="card-body"> 
                                    <form> 
                                        <div className="form-group"> 
                                            <label> Product Name :</label>
                                            <input placeholder="Product Name" name="productName" className="form-control"
                                            value={this.state.ProductName} onChange ={this.changeProductNameHandler}/> 
                                        
                                        </div>
                                        <div className="form-group"> 
                                        <label> Product Brand :</label>
                                        <input placeholder="Product Brand" name="productBrand" className="form-control"
                                        value={this.state.ProductBrand} onChange ={this.changeProductBrandHandler}/> 
                                        </div>
                                        <div className="form-group"> 
                                            <label>Product Category :</label>
                                            <input placeholder="Product Category" name="productCategory" className="form-control"
                                            value={this.state.ProductCategory} onChange ={this.changeProductCategoryHandler}/> 
                                        
                                        </div>
                                        <div className="form-group"> 
                                            <label>Product Price :</label>
                                            <input placeholder="Product Price" name="productPrice" className="form-control"
                                            value={this.state.ProductPrice} onChange ={this.changeProductPriceHandler}/> 
                                        
                                        </div>

                                        <div className="form-group"> 
                                            <label>Product Size :</label>
                                            <input placeholder="Product Size" name="productSize" className="form-control"
                                            value={this.state.ProductSize} onChange ={this.changeProductSizeHandler}/> 
                                        
                                        </div>

                                        <div className="form-group"> 
                                            <label>Discription:</label>
                                            <input placeholder="Discription" name="discription" className="form-control"
                                            value={this.state.Discription} onChange ={this.changeProductDiscriptionHandler}/> 
                                        
                                        </div>


                                        <div className="form-group"> 
                                        <label>Image:</label>
                                        <input type="file"  placeholder="Image" name="Image" className="form-control"
                                        value={this.state.Image} onChange ={this.changeProductImageHandler}/> 
                  
                                    
                                    </div>
                                    
                                            
                                            <button className="btn btn-success" onClick={this.saveProduct}>Save</button>
                                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                           

                                    </form>
                                    
                                </div>
                       </div>
                
                    </div>
                </div>
            </div>
        </div>
    }
}

export default CreateProductComponent;
