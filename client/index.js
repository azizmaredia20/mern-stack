import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Header from './containers/Header';
import Footer from './components/Footer';
import Main from './containers/Main';
import store from './store';

const App = (props) => (
    <Provider store={store}>
    <BrowserRouter basename="/">
        <div>
            <Header />
                <Main />
            <Footer />
        </div>
    </BrowserRouter>
    </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);