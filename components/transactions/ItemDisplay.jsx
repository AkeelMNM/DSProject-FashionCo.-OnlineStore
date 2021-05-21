import React from "react";
import '../../styles/transactions/Payment.css'
import ItemsList from "./items";


/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

export default function ItemDisplay (props){
    const { items } = props;
    let subTotal = 0;
    let total = 0;

        return <div>
            <div className={'item-style-view'}>
                <h3>Shopped Items</h3>

                    {
                        items.map(item => {
                            subTotal = item.price * item.qty;
                            total = total + subTotal;
                            return <ItemsList id={item.id.toString()} item={item} price={subTotal}/>

                        })
                    }


            </div>
            <div style={{marginTop:-15}} className={'item-style-view'} >
                <table border={0}>
                    <tbody>
                    <tr>
                        <td className={'tdNames'}>Sub total</td>
                        <td><label className={'itemValue'}>Rs.{subTotal}</label></td>
                    </tr>
                    <tr>
                        <td className={'tdNames'}>Shipping :</td>
                        <td> <label className={'itemValue'}>FREE</label></td>
                    </tr>
                    <tr><td colSpan={2}></td></tr>
                    <tr>
                        <td className={'tdNames'}><span style={{fontWeight:"bold"}}>Total : </span></td>
                        <td ><span className={'itemValue'} style={{fontWeight:"bold"}}>Rs.{total}</span></td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
}
