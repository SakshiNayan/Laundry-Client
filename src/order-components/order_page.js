import React from "react";
import "./order_page.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SummaryPage from "./summary";
import HeaderP2 from "./headerP2";
import SideBar from "./sidebar"
import axios from "axios";
import FooterSecond from "./footerP2";

const OrderPage = ()=>{
    const Navigate=useNavigate();
    const [summary, setSummary] = useState(false);
    const [orderData, setOrderData] = useState([]);
    const [get,setget] = useState(true)
    const Authtoken=localStorage.getItem("authorization")
    const [orderhistory,setorderhistory]=useState(false)
    const [viewdata, setViewdata] = useState([]);
    const [query, setQuery] = useState("")
 
    useEffect(() => {
        if(Authtoken){
            axios({
                method:'GET',
                url:'http://localhost:3001/order/create-order',
                headers:{
                    authorization:Authtoken
                }
            })
                .then((datas) => {
                    setorderhistory(true)
                    // let currOder = datas.data.reverse()
                    // console.log(currOder)
                    // setOrderData(currOder.data)
                    setOrderData(datas.data)
                })
        } else {
            Navigate("/Signin")
        }
        
    }, [])
    // const querHandle = (e)=>{
    //     setQuery(e.target.value);
    // }
     console.log(query);
    const handleView = (data) =>{
        setViewdata(data);
    }
    const selecthandler = (e)=>{
        if(e.target.value==="Store Location"){
           setget(!get)
        }else{
          const newdata = orderData.filter((item)=>{
            if(item.storeInfo.address === e.target.value){
                return item;
            }

           })
           setOrderData(newdata)
        }
        console.log(orderData)
      }
      const selecthandlerC = (e)=>{
        if(e.target.value==="City"){
            setOrderData(orderData)
           setget(!get)
        }else{
          const newdata = orderData.filter((item)=>{
            if(item.storeInfo.name === e.target.value){
                return item;
            }
           })
           setOrderData(newdata)
        }
        console.log(orderData)
      }
    console.log(viewdata)
    const reversed = [...orderData].reverse()
    return (
        <>
        
       <HeaderP2/>
       {orderhistory &&
        <div className="order">
        <p className="orderv">Order | {orderData.length}</p>
        <div className="class">
        <Link to="/create-order"><button className="create">Create</button></Link>
        <img className='magnifine' src="/images/search.png" alt=""/>
        <input type="search1"  onChange={event => setQuery(event.target.value)} className="search"/>
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
                <select className="select" onChange={(e)=>selecthandler(e)}>
                <option value="Store Location">Store Location</option>
                <option value="Phone booth,10th Road">Phone booth,10th Road</option>
                <option value="Near J-D Hall,11th strit" >Near J-D Hall,11th strit</option>
                <option value="Sindhari ,By pass" >Sindhari ,By pass</option>
              </select>
                </th>
                <th style={{width:"100px"}}>
                    City
                <select className="select" onChange={(e)=>selecthandlerC(e)}>
                <option value="City">City</option>
                <option value="Jp Nagar">Jp Nagar</option>
                <option value="Alkapuri" >Alkapuri</option>
                <option value="Pink City" >Pink City</option>
              </select>
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
            {reversed.filter(viewdata =>{
                if(query === ""){
                    return viewdata;
                } else if(viewdata.orderId === query){
                    return viewdata;
                }
            }).map((data, index)=>{
                return(
                    <div key={index} className="order_data">
                    <div className="order_p" style={{width: "110px"}}>
                    {data.orderId}
                    </div>
                    <div className="order_p" style={{width: "180px"}}>
                    {data.dateTime}
                    </div>
                    <div className="order_p" style={{width: "150px"}}>
                    {data.storeInfo.address}
                    </div>
                    <div className="order_p" style={{width: "120px"}}>
                    {data.storeInfo.name}
                    </div>
                    <div className="order_p" style={{width: "180px"}}>
                    {data.storeInfo.phone}
                    </div>
                    <div className="order_p" style={{width: "100px"}}>
                    {data.price}
                    </div>
                    <div className="order_p" style={{width: "90px"}}>
                    {data.price - 90}
                    </div>
                    <div className="order_p" style={{width: "120"}}>
                    {data.status}
                    { data.status === "Ready to pickup" ? <div style={{color: "red"}} className="c_o">Cancel Order</div> : <div style={{color: "white"}} className="c_o"></div>}
                    </div>
                    <button Cancle Order
                  className="btn1" 
                  onClick={() => setSummary(true)}><span onClick={() => handleView(data)} class="material-symbols-outlined">visibility</span></button>
                    </div>
                )
            })}
                  
                </div>
        </div> }
        {!orderhistory &&  <div className="content">
        <p className="orderno">Order | 0</p>
        <div className="create_search">
        <input type="search" className="search"/>
        <img className='magnifines' src="/images/search.png" alt=""/>
        </div>
        <div className="create_order">
            <p>No Order Available</p>
            <Link to ="/create-order"><button>Create</button></Link>
        </div>
        </div>
        }
        { summary && <SummaryPage viewdatasummary={viewdata} closeSum={setSummary}/>}
        <SideBar/>
        <FooterSecond/>
        </>
    )
}
export default OrderPage;