import React from "react";

export default function ItemsList(props){
    const {item, price}  = props;
    return [<table style={{marginTop:'10px'}}>
        <tbody>
        <tr>
            <td colSpan={2}><label id={'itemN'}>{item.name}</label></td>
        </tr>
        <tr>
            <td className={'tdNames'}>Unit Price : </td>
            <td><label className={'itemValue'}>Rs.{item.price}</label></td>
        </tr>
        <tr>
            <td>Qty : </td>
            <td><label className={'itemValue'}>{item.qty}</label></td>
        </tr>
        <tr>
            <td>Total Price : </td>
            <td><label className={'itemValue'}>Rs.{price}</label></td>
        </tr>
        </tbody>
    </table>]
}
