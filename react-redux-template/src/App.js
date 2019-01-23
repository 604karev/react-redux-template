import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import reducers from 'reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Layout from 'containers/Layout';
import Phones from 'containers/Phones'

import './App.css';


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <Layout className="App">
                        <Route path='/' component={Phones}/>
                    </Layout>
                </Provider>
            </BrowserRouter>
        );
    }
}

export default App;
