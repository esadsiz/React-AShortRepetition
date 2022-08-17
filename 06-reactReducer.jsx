import { useState } from "react";

const UseStateExample = () => {
  const [dog, setDog] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchDog = () => {
    setLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDog(data.message);
        setLoading(false);
      })
      .catch(() => {
        setError("ERROR!! DATA CAN NOT BE FETCHED");
        setLoading(false);
      });
  };
  return (
    <div>
      <button
        onClick={fetchDog}
        disabled={loading}
      >
        Fetch Dog
      </button>
      {dog && <img src={dog}/>}
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default UseStateExample;


// REDUCER VERSION


import { useReducer } from "react";
import { initialState, reducer } from "./reducer";

const initialState = {
  loading: false,
  dog: "",
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, dog: "", error: "", loading: true };
    case "SUCCESS":
      return { ...state, dog: action.payload, error: "", loading: false };
    case "FAIL":
      return { ...state, dog: "", error: action.payload, loading: false };
    default:
      break;
  }
};

const UserReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, error, dog } = state;

  const fetchDog = () => {
    dispatch({ type: "START" });
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SUCCESS", payload: data.message });
      })
      .catch(() => {
        dispatch({ type: "FAIL", payload: "ERROR!! DATA CAN NOT BE FETCHED" });
      });
  };
  return (
    <div>
      <button
        onClick={fetchDog}
        disabled={loading}
      >
        Fetch Dog
      </button>
      {dog && <img src={dog}/>}
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default UserReducerExample;
