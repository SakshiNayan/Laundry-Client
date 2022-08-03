import React from 'react'
import "./order-create.css"

const ItemRows = (props) => {
  // console.log(props)
  const [itemPriceDetail, setItemPriceDetail] =React.useState({
    itemPrice :0,
    PerItemPrice :0
  })
  const handleChange =(e)=>{
    const {value} =e.target;
    props.setOrderDetails(prevDetail =>{
      return {...prevDetail, [props.info.name]: {...prevDetail[props.info.name], quantity: value}}
    })
  }
  const handleImageClick=(e)=>{
    let index = Number(e.target.attributes.index.value)
    props.setOrderDetails(prevDetail =>{
      let newWashType =[...prevDetail[props.info.name].washType];
      newWashType[index] = !newWashType[index];
      return{
        ...prevDetail,[props.info.name]:{...prevDetail[props.info.name], washType:newWashType}
      }
    })
    
  }
  const typePrice ={
    Shirts :[10, 10, 15, 20],
    TShirts : [10, 10, 15, 20],
    Trousers : [15, 15, 20, 25],
    Jeans : [20, 20, 25, 30],
    Boxers : [15, 15, 20, 25],
    Joggers : [20, 20, 25, 30],
    Others : [25, 25, 30, 30],
  }

  function CalculateEachItemPrice(){
    let pricePerItem = 0, prices = 0;
    props.orderDetails[props.info.name].washType.map((val ,i)=>{
      prices += typePrice[props.info.name][i] * val * Number(props.orderDetails[props.info.name].quantity);
      pricePerItem += typePrice[props.info.name][i] * val;
      // console.log(typePrice[props.info.name][i])
      // console.log( Number(props.orderDetails[props.info.name].quantity),"Number")
      // console.log(val)
    })
    return [pricePerItem , prices];
  }

  // React.useEffect(()=>{
  //   let [itemPrice ,  PerItemPrice]= CalculateEachItemPrice();
  //   setItemPriceDetail({
  //     itemPrice :itemPrice,
  //     PerItemPrice : PerItemPrice
  //   })})
  //   props.setOrderDetails(prevDetail =>({...prevDetail,[props.info.name]: {...prevDetail[props.info.name], prices :itemPrice}}))
  // }, [...props.orderDetails[props.info.name].washType, props.orderDetails[props.info.name].quantity]);

  const HandleReset =()=>{
    props.setOrderDetails(prevDetail =>({...prevDetail, [props.info.name]: {
      quantity :"",
      washType :[0, 0, 0, 0],
      price :0,
    }}));
    props.setModifyOrderDetail([])
  }

  return(
    <>
    <div id="item-row">
      <div className="imageDivision">
        <img  className="itemImg"  src={`/images/${props.info.image}`}/>
        <div className="para">
          <p><b>{props.info.name}</b></p>
          <p style={{ "fontSize":"11px", "color":"#76788B", "margin-top":"-5px"}}>Lorem Ispum is simple</p>
        </div>
      </div>
      
      <div className="inputDivision">
        <div className="inputNum">
          <input className="quantityNum" type="text"
          name='quantity' 
          // value={props.orderDetails[props.info.name].quantity} 
          style={{ border: "none" }}  
           onChange={handleChange}
          ></input>
        </div>
      </div>
      <div className="washDivision">
        <img 
          className="washImg" 
          index ="0"
          src={`/images/${props.orderDetails[props.info.name].washType[0] ? "blue-washing.svg" : "washing-machine.png"}`} 
          onClick={handleImageClick}
        />
        <img 
          className="washImg" 
          index ="1"
          src={`/images/${props.orderDetails[props.info.name].washType[1] ? "blue-ironing.svg" : "iron.png"}`} 
          onClick={handleImageClick}
        />
        <img 
          className="washImg" 
          index ="2"
          src={`/images/${props.orderDetails[props.info.name].washType[2] ? "towel.svg" : "dry-wash.png"}`} 
          onClick={handleImageClick} 
        />
        <img 
          className="washImg" 
          index ="3"
          src={`/images/${props.orderDetails[props.info.name].washType[3] ? "blue-bleach.svg" : "bleach.png"}`}  
          onClick={handleImageClick}
        />

      </div>
      <div>
        <div>
          {itemPriceDetail.itemPrice ?
          <div className="price">
            <div>
              {props.orderDetails[props.info.name].quantity + "X" + itemPriceDetail.PerItemPrice} =
            </div>
            <div className="itemPrice">
                {itemPriceDetail.itemPrice}
            </div>

          </div>:"__"}
        </div>
      </div>
      {itemPriceDetail.itemPrice ? <button className="resetButton" onClick={()=> {HandleReset()}}>Reset</button> : ""}
      {/* <div className="price">
        <p>___</p>
      </div> */}
    </div>
    </>
  )
    
}
 export default ItemRows;