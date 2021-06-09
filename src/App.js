import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from "react";
function App() {

  const [count,setCount]=useState(10)
 
  

 const handleClick = ()=>{
  setCount(count+1)
 }

  function Counter(){
    return (
      <div>
        <p>count : {count}</p>
        <button onClick={handleClick}>ClickMe</button>
      </div>
    )
  }
function ServerData(){
  const [users,setUsers]=useState([])
  useEffect(()=>{
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
    return(
      <div>
        <p> Total User : {users.length}</p>
        {
          users.map((user)=><li>{user.id} : {user.name}</li>)
        }

      </div>
    )
}

  var person1={
    name : "Mahafuzur Rahaman",
    prof : " Singer"
  }

  function Person(props){
    const productStyles={
      display:"block",
      width:"200px",
      height:"200px",
      backgroundColor:"gray",
      color:"pink",
      float:"left",
      border:"2px solid black",
    }
    return (
      < div style = {productStyles}>
        <h3>{props.name} amar bondhu</h3>
      </div>
    )
  }

  const products = [
    {name:"Photoshop",price:"45"},
    {name:"Adobe Xd",price:"88"},
    {name:"Printer",price:"95"},
    {name:"Vimeo",price:"40"},
  ]

  function Product(props){
    const productStyles={
      display:"block",
      width:"200px",
      height:"200px",
      backgroundColor:"gray",
      color:"pink",
      float:"left",
      border:"2px solid black",
      
    }
    const  {name,price} =props.pd;
  return( 
    <div style={productStyles}>
      <h3>Name:{name}</h3>
      <p>Price : $ {price}</p>
    </div>
  )
  }


  return (
 
   <div>
     <p>{person1.name} is  {person1.prof} and  he is 20 years old</p>
     <Counter></Counter>
     <div>
     <Product pd ={products[0]}></Product>
     <Product pd ={products[1]}></Product>
     <Product pd ={products[2]}></Product>
     <Product pd ={products[3]}></Product>
     <Product pd ={products[0]}></Product>
     {
      products.map(spd =><Product pd={spd}></Product>) 
     }
     </div>

     <div>

     <Person name = "jodu" ></Person>
     <Person name = "modhu" ></Person>
     <Person name = "kodu"></Person>
     {
       products.map(sprod=><Product pd ={sprod}></Product>)
     }
     
     </div>
<div style = {{width:400,height :400, display:'block',color:'tomato',overflow:'hidden',backgroundColor:'black',marginTop:10}}>
  <ServerData></ServerData>
</div>
   </div>
  );
}

export default App;
