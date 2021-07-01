import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import SignUp from "./login/signup/SignUp";
import SignIn from "./login/signin/SignIn";
import Home from "./home/Home";
import ProductPage from "./productPage/ProductPage";
import Checkout from "./checkout/Checkout";
import CategoryPage from "./categoryPage/CategoryPage";
import { useState } from "react";
import UserContext from "../contexts/UserContext";
import CartContext from "../contexts/CartContext";
import AuthUser from "../utilFunctions/AuthUser";

export default function App() {
	const [user, setUser] = useState(null);
	const [cart, setCart] = useState([]);

	return (
		<CartContext.Provider value={{ cart, setCart }}>
			<UserContext.Provider value={{ user, setUser }}>
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
                            {<AuthUser setUser={setUser}/>}
							<ProductPage />
						</Route>
						<Route path="/products/:category" exact>
							<CategoryPage />
						</Route>
						<Route path="/checkout" exact>
							<Checkout />
						</Route>
					</Switch>
				</BrowserRouter>
			</UserContext.Provider>
		</CartContext.Provider>
	);
}

const Styles = createGlobalStyle`
    ${reset}
    a {
        text-decoration: none;
    }

    body { 
        font-family: 'Roboto', sans-serif;
        background-color:#f7f7f7;
        *{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
    }

    strong{
        font-weight: 700;
    }
`;
