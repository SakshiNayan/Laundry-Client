import {Route,Routes,BrowserRouter} from "react-router-dom"

//  import Footer from "./order-components/footerP2";
//  import Header from "./order-components/headerP2";
import OrderBody from "./order-components/order-create";
// import SideBar from "./order-components/sidebar";
import Body from "./order-components/body"
 import OrderPage from "./order-components/order_page";
import Signinpage from "./order-components/Signinpage";
import Registerpage from "./order-components/RegisterPage";
import Copyrightcomp from "./order-components/Copyrightcomp";
// import Logoutcomp from "./order-components/"

function App() {
  return (
    
    <BrowserRouter>
    {/* <Header/> */}
   
    <Routes>
      
      <Route path="/create-order" element={<OrderBody/>}></Route>
       <Route path="/create" element={<Body/>}/>
      <Route path="/viewOrder" element={<OrderPage/>}/>
       {/* <Route exact path="/" element={<Signinpage/>}></Route>  */}
      <Route path="/" element={<Signinpage/>}></Route>
      <Route path="/Register" element={<Registerpage/>}></Route>
      {/* <Route path="/Logout" element={<Logoutcomp/>}></Route>   */}
    

      
    </Routes>
    {/* <SideBar/>
    <Footer/> */}
    <Copyrightcomp/>
   
    </BrowserRouter>
    
    
    
  );
}

export default App;
