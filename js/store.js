var redux = require('redux');
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;

var reducers = require('./reducers/dex');

var store = createStore(reducers.reducer, applyMiddleware(thunk));
module.exports  = store;
