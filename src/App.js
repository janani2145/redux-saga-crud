// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Form from './components/Form';
import Table from './components/Table';



const App = () => (
  <Provider store={store}>
    <div>
      <h1>CRUD Application with Redux-Saga</h1>
      <Form/>
      <Table/>
    </div>
  </Provider>
);

export default App;
