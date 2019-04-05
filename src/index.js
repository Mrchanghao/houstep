import React from 'react';
import {render} from 'react-dom';
import './styles/index.scss'
import {Provider} from 'react-redux';
import {store} from './store/index';
import App from './App/App';

const Root = <Provider store={store}><App /></Provider>

render(Root, document.getElementById('root'))

