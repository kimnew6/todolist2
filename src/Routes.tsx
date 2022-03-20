import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import App from './App';

class Routers extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/todolist" element={<App />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Routers;
