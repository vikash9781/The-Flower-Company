import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ContactUsBtn from "./Components/ContactUsBtn";
import Home from "./Components/Home";
import { useState } from "react";
import {Routes, Route} from 'react-router-dom'
import data from "./data";
import CollectionShop from "./Components/CollectionShop";
import OccasionShop from "./Components/OccasionShop";
import FloralDecor from "./Components/FloralDecor";
import SelectCity from "./Components/SelectCity";
import Login from "./Components/Login"
import Cart from "./Components/Cart"

function App() {
  const [ currency , setCurrency] = useState("INR");
  const [ dataa , setDataa] = useState(data)
  
 

  return (
    <div className ="Font">
      <Navbar currency = {currency}  setCurrency = {setCurrency} dataa = {dataa} setDataa = {setDataa}/>
     
      <Routes>
        <Route path="/" element={<Home dataa = {dataa} currency = {currency} setCurrency = {setCurrency} setDataa = {setDataa}/>}/>
        <Route path="/collectionShop" element={<CollectionShop dataa = {dataa} setDataa = {setDataa}/>}/>
        <Route path="/occasionShop"  element={<OccasionShop dataa = {dataa} setDataa = {setDataa} currency ={currency} setCurrency={setCurrency}/>}/>
        <Route path="/floral" element={<FloralDecor/>}/>
        <Route path="/city" element={<SelectCity  dataa = {dataa} setDataa = {setDataa} currency ={currency} setCurrency={setCurrency}/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element = {<Cart dataa = {dataa} setDataa = {setDataa} currency ={currency} setCurrency={setCurrency} />}/>

      </Routes>
      
      <ContactUsBtn />
      <Footer />
    </div>
  );
}

export default App;
