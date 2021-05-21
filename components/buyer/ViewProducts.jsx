import React from 'react';
import NavMenu from "../NavMenu";
import ShoppingCartService from "../../service/ShoppingCartService";
import ViewProductsService from "../../service/ViewProductsService";

//Css Styles Sheet
import '../../styles/buyer/ViewProducts.css';

//Images
import search_icon from 'url:../../images/search_icon.jpeg';
import Cookies from "universal-cookie/es6";

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

class ViewProducts extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            products: [],
            qty:'',
            search:''
        }
        this.NumberHandling = this.NumberHandling.bind(this);
    }

    componentDidMount(){
        ViewProductsService.getProducts().then(res=>{
            this.setState({products : res.data})
        })
    }

    NumberHandling(event){
        this.setState({qty:event.target.value});
    }

    AddToShopping(event,product) {
        event.preventDefault();
        const cookies = new Cookies();
        console.log('im in addToShoppingCart')

        let Shopping ={
            userID:cookies.get('userID'),
            productId:product.id,
            qty:"1"
        }

        ShoppingCartService.AddShoppingCart(Shopping).then(res =>{
            alert(res);
        });

    }


    render(){

        const onChangeHandling = (e)=>{
            const search = e.target.value;
            if(search) {
                ViewProductsService.SearchProduct(search).then(res => {
                    this.setState({products: res.data})
                })
            }else{
                ViewProductsService.getProducts().then(res=>{
                    this.setState({products : res.data})
                })
            }
        }

        const cookies = new Cookies();
        return <div>
            <NavMenu userType={cookies.get('userType')}/>
            <div className={'SearchBoxContainer'}>
                <table className={'elementsContainer'}>
                    <tr>
                        <td>
                            <input lable={"Search"} icon={"search"} className={'search'} onChange={(e)=>onChangeHandling(e)} />
                        </td>
                        <td>
                            <img src={search_icon} alt={'Search'} />
                        </td>
                    </tr>
                </table>
            </div>

            <div className={'view-container'}>
                <div className={'view-row'}>

                    {
                        this.state.products.map(product => {
                            return <div className={'view-item'}>
                                <img src={`data:image/jpg;base64,${product.image}`} id="sImage" />
                                <h4 className={"Pt-name"}> {product.productName} </h4>
                                <p className={"Pt-brand"}>Brand: {product.productBrand} </p>
                                <p className={"Pt-Size"}>Size: {product.productSize} </p>
                                <h4 className={"Pt-price"}>Price: Rs.{product.productPrice}.00 </h4>
                                <p className={"Pt-Disc"}> {product.Discription} </p>

                                <p className={"Pt-qty"}> Quantity: <input type={'number'} value={this.state.qty}
                                       onChange={ this.NumberHandling} />
                                </p>

                                <button onClick={event => this.AddToShopping(event,product)} className={"btn-AddToCart"}> Add to Cart </button>
                            </div>
                        })
                    }

                </div>
            </div>


        </div>
    }


}


export default ViewProducts;
