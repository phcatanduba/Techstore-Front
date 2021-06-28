import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default function App() {
    return (
        <BrowserRouter>
            <Styles>
                <Switch>
                    <Route></Route>
                </Switch>
            </Styles>
        </BrowserRouter>
    );
}

const Styles = createGlobalStyle`
    ${reset}
`;
