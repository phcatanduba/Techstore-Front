import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import SignUp from "./login/signup/SignUp";
import SignIn from "./login/signin/SignIn";
import Home from "./home/Home";
import ProductPage from "./productPage/ProductPage";

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
			</Switch>
		</BrowserRouter>
	);
}

const Styles = createGlobalStyle`
    ${reset}
    @import url('https://fonts.googleapis.com/css2?family=Concert+One&family=Roboto:ital,wght@0,300;0,400;1,700&display=swap');
    a {
        text-decoration: none;
    }
    * { 
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
    }
    body {
        background-color:#f7f7f7;
    }
`;
