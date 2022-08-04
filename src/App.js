import {Route,Routes,BrowserRouter} from "react-router-dom"


import OrderBody from "./order-components/order-create";

import Body from "./order-components/body"
 import OrderPage from "./order-components/order_page";
import Signinpage from "./order-components/Signinpage";
import Registerpage from "./order-components/RegisterPage";
import Copyrightcomp from "./order-components/Copyrightcomp";
import Signin from "./order-components/Signin";

function App() {
  return (
    
    <BrowserRouter>
  
   
    <Routes>
      
      <Route path="/create-order" element={<OrderBody/>}></Route>
       <Route path="/create" element={<Body/>}/>
      <Route path="/viewOrder" element={<OrderPage/>}/>
       <Route path="Signin" element={<Signin/>}></Route>
      <Route path="/" element={<Signinpage/>}></Route>
      <Route path="/Register" element={<Registerpage/>}></Route>
      
        
    

      
    </Routes>
    
    <Copyrightcomp/>
   
    </BrowserRouter>
    
    
    
  );
}

export default App;
