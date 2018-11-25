import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './containers/Main'

const App = (props) => (
    <div>
        <Header />
            <Main />
        <Footer />
    </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);