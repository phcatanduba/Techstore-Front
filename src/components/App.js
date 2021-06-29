import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import SignUp from './signup/SignUp';

export default function App() {
    return (
        <BrowserRouter>
            <Styles />
            <Switch>
                <Route path="/sign-up">
                    <SignUp />
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
