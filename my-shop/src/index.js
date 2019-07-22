import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
// import Home from './components/Home';
// import User from './components/User';



class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <MainLayout>
                    <Switch>
                        {/* <Route exact path={"/"} component={Root} />
                        <Route exact path={"/home"} component={Home} />
                        <Route exact path={"/user"} component={User} /> */}
                    </Switch>
                </MainLayout>
            </BrowserRouter>
        )
    }
}

const rootElement = document.getElementById('root');
render(<App />, rootElement); 

