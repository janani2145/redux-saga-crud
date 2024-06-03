import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/RegisterForm/Form';
import { Table } from './components/RegisterDetails/Table';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Home/Header';


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/edit/:id' element={<Form />} />
          <Route path='/table' element={<Table />} />
          </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
