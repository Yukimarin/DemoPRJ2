import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Homepage from "./pages/Homepage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Cart from "./pages/Cart";
function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/product/:productId' element={<ProductDetails />}></Route>
        {/* Not Found */}
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
