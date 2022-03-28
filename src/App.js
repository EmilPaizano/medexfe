import { Provider } from 'react-redux';
import store from './Store';

import logo from './logo.svg';
import './App.css';
import Splash from '../src/Components/Views/Splash'
import Signin from './Components/Views/Signin/SigninPage';
import Todo from "./Components/Views/Todo/TodoPage"
import Login from './Components/Views/Login/LoginPage';

function App() {
  return (
    <Provider store={store}>
        {/* <Signin></Signin> */}
        {/* <Todo></Todo> */}
        <Login></Login>
    </Provider>
      
  );
}

export default App;
