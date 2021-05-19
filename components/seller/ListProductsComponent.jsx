import React, { Component } from 'react';
import ProductService from '../../service/ProductService';
import NavMenu from "../NavMenu";
import Cookies from "universal-cookie/es6";


class ListProductsComponent extends Component {
    
    constructor(props){
        super(props)

        this.state={
            products:[] 

        }
        this.addProduct=this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
      

    }
    
    deleteProduct(id){
        ProductService.deleteProduct(id).then( res => {
            this.setState({products: this.state.products.filter(product => product.id !== id)});
        });


    }

    viewProduct(id){
        this.props.history.push(`/view-product/${id}`);
    }

    editProduct(id){
        this.props.history.push(`/update-product/${id}`);
    }


    componentDidMount(){

        ProductService.getproducts().then((res) =>{

            this.setState({products:res.data});
        });

    }   

    addProduct(){
          this.props.history.push('add-product/_add');
            
        }

       

    render() {
        const cookies = new Cookies();
        return <div>
            <NavMenu userType={cookies.get('userType')}/>
            <div>
                <h2 className="text-center"> Products List </h2>   
                    <div className= "row">
                        <button className="btn btn-primary" onClick={this.addProduct}>Add Product</button>
                    </div>
                    <br></br>
                <div className="row"> 
                    <table className="table table-striped table-bordered"> 
                        <thead> 
                            <tr>
                                <th> Product Name</th>                            
                                <th> Product Brand</th>
                                <th> Product Category</th>
                                <th> Product Price</th>
                                <th> Product Size</th>
                                <th> Description</th>
                                  <th> Image</th>
                                <th> Actions</th>
                            </tr>
                        
                        </thead>

                        <tbody> 
                            {
                                    this.state.products.map(
                                        product =>
                                        <tr key={product.id}> 
                                            <td> {product.productName}</td>
                                            <td> {product.productBrand}</td>
                                            <td> {product.productCategory}</td>
                                            <td> {product.productPrice}</td>
                                            <td> {product.productSize}</td>
                                            <td> {product.discription}</td>
                                            <td > <img src={`data:image/jpg;base64,${product.image}`} id="sImage" /></td>

                                            <td> 
                                            <button onClick={ () => this.editProduct(product.id)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProduct(product.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewProduct(product.id)} className="btn btn-info">View </button>
                                            </td>
                                        
                                        </tr>


                                    )
                                
                            }
                        
                        </tbody>
                    
                    </table >

                </div>
            </div>
        </div>
    }
}

export default ListProductsComponent;
