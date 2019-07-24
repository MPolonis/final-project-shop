import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import Faq from './components/Faq/Faq';
import Policy from './components/Policy/Policy';



class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <MainLayout>
                    <Switch>
                        {/* <Route exact path={"/"} component={Root} /> */}
                        <Route exact path={"/faq"} component={Faq} />
                        <Route exact path={"/regulamin"} component={Policy} /> 
                    </Switch>
                </MainLayout>
            </BrowserRouter>
        )
    }
}

const rootElement = document.getElementById('root');
render(<App />, rootElement); 

