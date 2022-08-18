// REDUCER.JSX

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    case "RESET":
      return { counter: 0 };
    default:
      return state;
  }
};
export default counterReducer;

//
//
//
//
// COUNTER.JSX

import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

// combined version
//const counter = useSelector((state) => state.counterRed.counter);

  return (
    <div>
      <h2>Counter With Redux</h2>
      <h1>{counter}</h1>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          increase
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;

//
//
//
//
// APP.JS

import Counter from "./components/counter/Counter";
import { createStore } from "redux";
import reducer from "./redux";
import { Provider } from "react-redux";
import { getStore } from './redux';

function App() {
  const store = createStore(reducer);
  // combined version
  // const store = getStore();
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;

// ##############################################################
// ##############################################################
// ##############################################################
// ##############################################################
// ##############################################################

// COMBINING REDUCERS

import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counterReducer';
import todoReducer from './reducers/todoReducers';

const rootReducer = combineReducers({
  counterRed: counterReducer,
  todoRed: todoReducer,
});

export const getStore = () => {
  const store = createStore(rootReducer);
  return store;
};
