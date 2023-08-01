import { BrowserRouter, Navigate, Route, Routes, Switch } from "react-router-dom";
import LoginReg from "./pages/auth/LoginReg";
import ResetPassword from "./pages/auth/ResetPassword";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { useSelector } from "react-redux";
import ShowProduct from "./components/ShowProduct";
import ShowOrders from "./components/ShowOrders";
import AddOrder from "./components/AddOrder";
import AddProduct from './components/AddProduct'
import AddProductCsv from './components/AddProductCsv'
import UpdateOrder from "./components/UpdateOrder";
import OrderDetail from './components/OrderDetail'
import PlaceOrder from "./components/PlaceOrder";
import './App.css'
import UserSignUp from "./components/UserSignUp";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import OrdersByMbn from "./components/OrdersByMbn";

function App() {
  const { access_token } = useSelector(state => state.auth)
  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route exact path="/product" element={<ShowProduct/>} />
            <Route exact path="/orders" element={<ShowOrders/>} />
            <Route exact path="/addOrder" element={<AddOrder/>} />
            <Route exact path="/addProduct" element={<AddProduct/>} />
            <Route exact path="/addUser" element={<UserSignUp/>} />
            <Route exact path="/addProductCsv" element={<AddProductCsv/>} />
            <Route exact path="orders/:id" element={<OrderDetail/>} />
            <Route exact path="orders/mbn/:mob_no" element={<OrdersByMbn/>} />
            <Route exact path="/orders/:id/update" element={<UpdateOrder/>} />
            <Route exact path="/:id/placeOrder" element={<PlaceOrder/>} />
            <Route path="order" element={<Order />} />
            <Route path="login" element={<LoginReg /> }/>
            {/* <Route path="login" element={!access_token ? <LoginReg /> : <Navigate to="/dashboard" />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="api/user/reset/:id/:token" element={<ResetPassword />} /> */}
            <Route path="/dashboard/:id" element={ <Dashboard /> } />
          </Route>
          {/* <Route path="/dashboard/:id" element={access_token ? <Dashboard /> : <Navigate to="/login" />} /> */}
          {/* <Route path="*" element={<h1>Error 404 Page not found !!</h1>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
