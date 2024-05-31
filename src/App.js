import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/RegisterForm/Form';
import { Table } from './components/RegisterDetails/Table';
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/:id' element={<Form />} />
          <Route path='/table' element={<Table />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
