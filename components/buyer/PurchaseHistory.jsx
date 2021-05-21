import React from 'react';
import NavMenu from "../NavMenu";
import '../../styles/buyer/ViewProducts.css';
import Cookies from "universal-cookie/es6";
import ShoppingCartService from "../../service/ShoppingCartService";

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

class PurchaseHistory  extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            ShoppingCart: [],
            qty:'',
        }
    }

    componentDidMount(){
        const cookies = new Cookies;
        ShoppingCartService.getShoppingCartById(cookies.get('userID')).then(res=>{
            this.setState({ShoppingCart : res.data})
        })
    }

    NumberHandling(event){
        this.setState({qty:event.target.value});
    }


    render(){
        const cookies = new Cookies();
        return <div>
            <NavMenu userType={cookies.get('userType')}/>
            <div style={{width:'100%', marginTop:'180px'}}><label id={'labPh'}>User Purchase History</label></div><br/>
            <div className={'view-container2'}>
                <div className={'view-row'}>

                    {
                        this.state.ShoppingCart.map(product => {
                            console.log(product)
                            return <div className={'view-item'}>
                                <img src={`data:image/jpg;base64,${product.image}`} id="sImage" />
                                <h4 className={"Pt-name"}> {product.name} </h4>
                                <p className={"Pt-Size"}>Size: {product.size} </p>
                                <h4 className={"Pt-price"}>Price: Rs.{product.price}.00 </h4>
                                <p className={"Pt-qty"}> Quantity: <input type={'number'} value={product.qty}/>
                                </p>
                            </div>
                        })
                    }

                </div>
            </div>


        </div>
    }


}


export default PurchaseHistory;
