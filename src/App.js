import {Route,Routes,BrowserRouter} from "react-router-dom";
import OrderBody from "./order-components/order-create";
import Body from "./order-components/body";
import OrderPage from "./order-components/order_page";
import Signinpage from "./order-components/Signinpage";
import Registerpage from "./order-components/RegisterPage";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/create-order" element={<OrderBody/>}></Route>
       <Route path="/create" element={<Body/>}/>
      <Route path="/viewOrder" element={<OrderPage/>}/>
      <Route path="/" element={<Signinpage/>}></Route>
      <Route path="/Signin" element={<Signinpage/>}></Route>
      <Route path="/Register" element={<Registerpage/>}></Route>


    </Routes>

    </BrowserRouter>
    
    
    
  );
}

export default App;
