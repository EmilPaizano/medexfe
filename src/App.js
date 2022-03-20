import { Provider } from 'react-redux';
import store from './Store';

import logo from './logo.svg';
import './App.css';
import Splash from '../src/Components/Views/Splash'
import Signin from './Components/Views/SigninPage';

function App() {
  return (
    <Provider store={store}>
        <Signin></Signin>
    </Provider>
      
  );
}

export default App;
