import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import cartReducer from './components/reducers/cartReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from './components/MainLayout/MainLayout';
import Home from './components/Home/Home';
import Faq from './components/Faq/Faq';
import Policy from './components/Policy/Policy';
import Contact from './components/Contact/Contact';
import NoMatch from './components/NoMatch/NoMatch';
import ProductItem from './components/ProductItem/ProductItem';
import Cart from './components/Cart/Cart';



class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <MainLayout>
                    <Switch>
                        <Route exact path={"/"} component={Home} /> 
                        <Route exact path={"/home"} component={Home} />
                        <Route exact path={"/faq"} component={Faq} />
                        <Route exact path={"/regulamin"} component={Policy} /> 
                        <Route exact path={"/kontakt"} component={Contact} />
                        <Route exact path={"/koszyk"} component={Cart} />
                        <Route path={"/product/:id"} render ={props => (
                            <ProductItem
                                id={props.match.params.id}
                                {...props} />
                        )}
                        />
                        <Route component={NoMatch} />
                    </Switch>
                </MainLayout>
            </BrowserRouter>
        )
    }
}

const store = createStore(cartReducer);

const rootElement = document.getElementById('root');
render(<Provider store={store}><App /></Provider>, rootElement);


