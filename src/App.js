import React from 'react';
import './App.css';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import Routes from './routes/routes';

const store = configureStore({});

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
