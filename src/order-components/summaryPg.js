import React, {useState} from "react";
//import axios from 'axios';
import ConfirmationPop from "./confirmation";
import './summaryPg.css';



const SummaryPg =({closeSumPg})=>{
    // const orderDetail = props.orderDetail;
    const [trigger, setTrigger] =useState(false);
    const [orderFinalDetail , setOrderFinaldetail] =React.useState({
        dateTime : "",
        storeInfo : "",
        userAddress : "",
        status : "",
        items : "",
    })
    
    if(trigger){
        return <ConfirmationPop orderDone={setTrigger}/>
    }
    // const [tryW, setTry]= useState(false);
    // var sumTotal =0;
    // for(let i=0; i< orderDetail.length;i++){
    //     sumTotal += orderDetail[i].price * orderDetail[i].quantity
    // }
    const actions =[
        {
            name :"Jp Nagar",
            address :"Phone booth,10th Road",
            phone:"+91 9753855624"
        },
        {
            name :"Alkapuri",
            address :"Near J-D Hall,11th strit",
            phone:"+91 8733209221"
        },
        {
            name :"Pink City",
            address :"Sindhari ,By pass",
            phone:"+91 5399511300"
        }
    ]
    const handleChange =(e) =>{
        setOrderFinaldetail(prevDetail =>({...prevDetail, storeInfo: e.target.value}))
    }
    const handleButton =()=>{
        //closeSumPg(false)
        setTrigger("true");
        console.log(trigger);
    }

    return(
        <>
        <div id="summaryBack">
        <div id="popContainer">
            <div className="head">
                <p className="summaryHead"><b>Summary</b></p>
                
                <button onClick={()=> closeSumPg(false)} className="close-B"><b>X</b></button>
            </div>
            <div className="storeDetail">
                <div className="location">
                     <p><b>Store Location</b></p>
                     <select name="address" onChange={handleChange} id="address">
                        <option value="none" selected disabled hidden  className="disabled">Store Location</option>
                        {actions.map(store =>(<option value={JSON.stringify(store)} key={store.name}>{store.name}</option>))}
                     </select>
                
                    
                </div>
                <div className="storeAddress">
                    <p className="storeDetail"><b>Store Address</b></p>
                    <p className="storeDetail">{
                        orderFinalDetail.storeInfo !=="" ?
                        JSON.parse(orderFinalDetail.storeInfo).address :"__"
                    }</p>
                </div>
                <div className="phone">
                    <p className="storeDetail"><b>PhoneNo.</b></p>
                    <p className="storeDetail">{
                        orderFinalDetail.storeInfo !=="" ?
                        JSON.parse(orderFinalDetail.storeInfo).phone :"__"
                    }</p>
                </div>
            </div>
            
            <div className="orderDetails">
                <div className="ord"><p><b>Order Detail</b></p></div>
                    {/* {orderDetail.map(item =>(<Totalorder  info={item} key={item.name} />))} */}
                    
                    <div className="o-ds">
                        <ul type="none" className="o_ds">
                            <li className="item_ns">
                                Shirt
                            </li>
                            <li className="item_ts"><em>Washing, Ironing</em></li>
                            <li className="item_ps">
                                5 X 20 = <p>100</p>
                            </li>
                        </ul>
                    </div>
                    <div className="o-ds">
                        <ul type="none" className="o_ds">
                            <li className="item_ns">
                                Jeans
                            </li>
                            <li className="item_ts"><em>Washing, Ironing</em></li>
                            <li className="item_ps">
                                5 X 30 = <p>150</p>
                            </li>
                        </ul>
                    </div>
                    <div className="o-ds">
                        <ul type="none" className="o_ds">
                            <li className="item_ns">
                                Joggers
                            </li>
                            <li className="item_ts"><em>Chemical Wash</em></li>
                            <li className="item_ps">
                                2 X 100 = <p>200</p>
                            </li>
                        </ul>
                    </div>
                    <div className="sub_ts">
                        <p>Sub Total : 450</p>
                        <p className="picks">Pickup Charges : 90</p>
                    </div>
                    <div className="total">
                        <p>Total:     Rs 560</p>
                    </div>

            </div>
            
            <div className="userAdd">
                <p id="use_Add"><b>Address</b></p>
                <div className="A-container">
                    <div className="add">
                        <p className="ho"><b>Home</b></p>
                        <div><img src="/images/tick.svg" alt=""></img></div>
                    </div>
                    {/* <p>{orderFinalDetail.storeInfo !=="" ?
                        JSON.parse(orderFinalDetail.storeInfo).address :""
                    }</p> */}
                    <p style={{"margin-top": "-10px"}}>#123 10th Road ,<br></br>by pass,Banglore</p>
                </div>
                
            </div>
            <div className="B-div">
                {/* <button className="confirm-B" onClick={()=>{setTrigger(true)}}><div onClick={()=> closeSumPg(false)}>Confirm</div></button> */}
                    <button className="confirm-B" onClick={handleButton} > Confirm </button>
            </div>
        </div>
        </div>
        {/* <p>{trigger}</p> */}
        {/* {true && <p>working test</p>} */}
        {/* {trigger && <ConfirmationPop orderDone={setTrigger}/>} */}
        
        </>
    )
}
// const Totalorder =(props) =>{
//     const washType =["washing", "ironing","dry-wash","bleach"];
//     const typePrice ={
//         Shirts :[10, 10, 15, 20],
//         TShirts : [10, 10, 15, 20],
//         Trousers : [15, 15, 20, 25],
//         Jeans : [20, 20, 25, 30],
//         Boxers : [15, 15, 20, 25],
//         Joggers : [20, 20, 25, 30],
//         Others : [25, 25, 30, 30],
//     }
//     return(
//         <>
//         <div id="product-cart">
//             <div className="productType">{props.info.name}</div>
//             <div className="washType">washing,ironing{washType}</div>
//             <div className="priceType">275{typePrice}</div>
//         </div>
//         </>
//     )
// }

export default SummaryPg;