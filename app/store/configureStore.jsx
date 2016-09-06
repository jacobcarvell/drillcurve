var redux = require('redux');
var {showCompletedReducer, holeReducer} = require('reducers');

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    showCompleted: showCompletedReducer,
    drillholes: holeReducer
  })

  var store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
