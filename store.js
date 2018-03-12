import {createStore} from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import reducer from './src/reducers';

export const store = createStore(reducer, devToolsEnhancer());
