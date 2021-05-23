import './App.css';

import { Provider } from 'react-redux';
import store from './store';
import RouterContainer from "./RouterContainer";

function App() {
  return (
      <Provider store={store}>
        <RouterContainer />
      </Provider>
  );
}

export default App;
