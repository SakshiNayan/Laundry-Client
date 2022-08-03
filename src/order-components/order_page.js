import React from "react";
import "./order_page.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SummaryPage from "./summary";
import HeaderP2 from "./headerP2";
import SideBar from "./sidebar"
// import Footer from "./footerP2";

const OrderPage = ()=>{
    const [summary, setSummary] = useState(false);
    const [orderData, setOrderData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3004/order')
            .then(data => data.json())
            .then((data) => setOrderData(data))
    }, [])
    return (
        <>
       <HeaderP2/>
        <div className="order">
        <p className="orderv">Order | {orderData.length}</p>
        <div className="class">
        <Link to="/create-order"><button className="create">Create</button></Link>
        <img className='magnifine' src="/images/search.png" alt=""/>
        <input type="search1" className="search"/>
        </div>
        <table className="order_table" style={{border: "none"}}>
            <tr>
                <th style={{width:"90px"}}>
                    Order Id
                </th>
                <th style={{width:"150px"}}>
                    Order Date & Time
                </th>
                <th style={{width:"140px"}}>
                    Store Location
                </th>
                <th style={{width:"100px"}}>
                    City
                </th>
                <th style={{width:"100px"}}>
                    Store Phone
                </th>
                <th style={{width:"90px"}}>
                    Total Price
                </th>
                <th style={{width:"90px"}}>
                    Price
                </th>
                <th style={{width:"140px"}}>
                    Status
                </th>
                <th style={{width:"60px"}}>
                    View
                </th>
            </tr>
            </table>
            <div>
            {orderData.map((data, index)=>{
                return(

                    <div key={index} className="order_data">
                    <div className="order_p" style={{width: "110px"}}>
                    {data.order_id}
                    </div>
                    <div className="order_p" style={{width: "180px"}}>
                    {data.date_time}
                    </div>
                    <div className="order_p" style={{width: "150px"}}>
                    {data.store_location}
                    </div>
                    <div className="order_p" style={{width: "120px"}}>
                    {data.city}
                    </div>
                    <div className="order_p" style={{width: "180px"}}>
                    {data.phone_no}
                    </div>
                    <div className="order_p" style={{width: "100px"}}>
                    {data.Total_price}
                    </div>
                    <div className="order_p" style={{width: "90px"}}>
                    {data.price}
                    </div>
                    <div className="order_p" style={{width: "120"}}>
                    {data.status}
                    { data.status === "Ready to pickup" ? <div style={{color: "red"}} className="c_o">Cancle Order</div> : <div style={{color: "white"}} className="c_o"></div>}
                    </div>
                    <button Cancle Order
                  className="btn1" 
                  onClick={() => setSummary(true)}><span class="material-symbols-outlined">visibility</span></button>
                    </div>
                )
            })}
                  
                </div>
        </div>
        { summary && <SummaryPage closeSum={setSummary}/>}
        <SideBar/>
        {/* <Footer/> */}
        </>
    )

}
export default OrderPage;