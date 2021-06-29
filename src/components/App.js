import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import SignUp from './login/signup/SignUp';
import SignIn from './login/signin/SignIn';

export default function App() {
    return (
        <BrowserRouter>
            <Styles />
            <Switch>
                <Route path="/sign-up">
                    <SignUp />
                </Route>
                <Route path="/sign-in">
                    <SignIn />
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
`;
