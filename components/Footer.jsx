import React from "react";
import "../styles/HeaderFooter.css";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

class Footer extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <footer>
            <div id={'footDiv'}>
                <label id={'footLabel'}>Copyrights 2021  &copy; Fashion Clothing Co. All Rights Reserved</label>
            </div>
        </footer>
    }
}

export default Footer;