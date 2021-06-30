import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import SignUp from './login/signup/SignUp';
import SignIn from './login/signin/SignIn';
import Home from './home/Home';
import ProductPage from './productPage/ProductPage';
import Checkout from './checkout/Checkout';

export default function App() {
    return (
        <BrowserRouter>
            <Styles />
            <Switch>
                <Route path="/sign-up" exact>
                    <SignUp />
                </Route>
                <Route path="/sign-in" exact>
                    <SignIn />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/product/:id" exact>
                    <ProductPage />
                </Route>
                <Route path="/checkout" exact>
                    <Checkout />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

const Styles = createGlobalStyle`
    ${reset}
    a {
        text-decoration: none;
    }
    body { 
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
        background-color:#f7f7f7;
    }
`;
