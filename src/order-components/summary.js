import React from "react";
import './summary.css';
import { useEffect, useState } from "react";
import Alert from "./delete_alert";

const SummaryPage = ({closeSum, props})=>{
    const [viewAlert, setAlert] = useState(false);
    const [orderData, setOrderData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3004/order')
            .then(data => data.json())
            .then((data) => setOrderData(data))
    }, [])
    if(viewAlert){
        return  <Alert closeAlert={setAlert}/>
    }
    return(
        <>
        <div className="modalBackground">
            <div className="card">
                <div className="h">
                <p>Summary</p>
                <button id="close" onClick={() => closeSum(false)}>X</button>
                </div>
                <div className="section">
                    <ul type="none">
                        <li className="Title">
                            Store Location
                        </li>
                        <li className="Tval">
                            Ashok Nagar
                        </li>
                    </ul>
                    <ul type="none">
                        <li className="Title">
                            Store Address
                        </li>
                        <li className="Tval">
                        Near Phone booth, 10th road,
                        </li>
                    </ul>
                    <ul type="none">
                        <li className="Title">
                            Phone
                        </li>
                        <li className="Tval">
                        91 999999999
                        </li>
                    </ul>
                </div>
                <div className="track">
                    <ul type="none" className="track_v">
                        <li className="t_dis"><input type="radio"/>Pickup<span className="line">---------------------</span></li>
                        <li className="t_dis"><input type="radio"/>Washed<span className="line">-------------------</span></li>
                        <li className="t_dis"><input type="radio"/>Ironed<span className="line">---------------------</span></li>
                        <li className="t_dis"><input type="radio"/>Dilivered</li>
                    </ul>
                </div>
                <div className="orderDetail">
                    <p>Order Detail</p>
                    <div className="o-d">
                        <ul type="none" className="o_d">
                            <li className="item_n">
                                Shirt
                            </li>
                            <li className="item_t"><em>Washing, Ironing</em></li>
                            <li className="item_p">
                                5 X 20 = <p>100</p>
                            </li>
                        </ul>
                    </div>
                    <div className="o-d">
                        <ul type="none" className="o_d">
                            <li className="item_n">
                                Jeans
                            </li>
                            <li className="item_t"><em>Washing, Ironing</em></li>
                            <li className="item_p">
                                5 X 30 = <p>150</p>
                            </li>
                        </ul>
                    </div>
                    <div className="o-d">
                        <ul type="none" className="o_d">
                            <li className="item_n">
                                Joggers
                            </li>
                            <li className="item_t"><em>Chemical Wash</em></li>
                            <li className="item_p">
                                2 X 100 = <p>200</p>
                            </li>
                        </ul>
                    </div>
                    <div className="sub_t">
                        <p>Sub Total : 450</p>
                        <p className="pick">Pickup Charges : 90</p>
                    </div>
                    <div className="total">
                        <p>Total:     Rs 560</p>
                    </div>
                </div>
                <div className="display_add">
                    <p>
                        Address
                    </p>
                    <div className="address-block">
                       <p>
                        <b>Home</b><br/>
                        #223 10th road Jp Nagar <br/>Bangalore
                       </p>
                    </div>
                </div>
                <div className="foot">
                    <button className="footbtn" onClick={()=> setAlert(true)}>Cancle Order</button>
                    </div>
            </div>
        </div>
        
        </>
    )
}
export default SummaryPage;