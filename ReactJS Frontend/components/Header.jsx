import React from "react";
import "../styles/HeaderFooter.css";

class Header extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return <header>
            <div id={'headDiv'}>
                <div><label id={'headLabel'}>Fashion Clothing Co.</label></div>
            </div>
        </header>
    }
}

export default Header;
