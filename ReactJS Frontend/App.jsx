import React from "react";
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import PaymentGateway from "./components/transactions/PaymentGateway";
import Register from "./components/transactions/Register";
import Login from "./components/transactions/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import CreateProductComponent from "./components/seller/CreateProductComponent";
import ViewProductComponent from "./components/seller/ViewProductComponent";
import ListProductsComponent from "./components/seller/ListProductsComponent";
import UpdateProductComponent from "./components/seller/UpdateProductComponent";
import ViewProducts from "./components/buyer/ViewProducts";
import ShoppingCart from "./components/buyer/ShoppingCart";
import Transport from "./components/buyer/Transport";
import PurchaseHistory from "./components/buyer/PurchaseHistory";


class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <Router>
            <Header/>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/Register" component={Register} />
                <Route path="/PaymentGateway" component={PaymentGateway}/>
                <Route path="/UserProfile" component={UserProfile} />
                <Route path="/AddProducts" component={CreateProductComponent} />
                <Route path="/ListProducts" component={ListProductsComponent} />
                <Route path="/ViewProducts/:id" component={ViewProductComponent} />
                <Route path="/UpdateProducts/:id" component={UpdateProductComponent} />
                <Route path="/ViewProducts" component={ViewProducts}/>
                <Route path="/ShoppingCart" component={ShoppingCart} />
                <Route path="/Transport" component={Transport} />
                <Route path="/PurchaseHistory" component={PurchaseHistory} />
            </Switch>
            <Footer/>
        </Router>
    }
}

export default App;
