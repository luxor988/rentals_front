import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Apartments from './components/Apartments';
import Apartment from './components/Apartment';
import { ToastContainer } from 'react-toastify';
import Appheader from './components/Appheader';
import Tenant from './components/Tenant';
import Appfooter from "./components/Appfooter";

function App() {

  return (
      <div className="d-flex flex-column min-vh-100">
          <ToastContainer theme='colored' position='top-center'></ToastContainer>
          <BrowserRouter>
              <Appheader></Appheader>
              <Routes>
                  <Route path='/' element={<Home/>}></Route>
                  <Route path='/apartments' element={<Apartments/>}></Route>
                  <Route path='/apartment/:productId' element={<Apartment/>}></Route>
                  <Route path='/login' element={<Login/>}></Route>
                  <Route path='/register' element={<Register/>}></Route>
                  <Route path='/tenant' element={<Tenant/>}></Route>
              </Routes>
              <Appfooter></Appfooter>

          </BrowserRouter>
      </div>

  );

}

export default App;