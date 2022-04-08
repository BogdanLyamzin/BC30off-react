import {useEffect} from "react";
import {useDispatch} from "react-redux";

import { current } from "./redux/auth/auth-operations";

import Routes from "./Routes";

import "./shared/styles/style.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(current());
  }, [dispatch])

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
