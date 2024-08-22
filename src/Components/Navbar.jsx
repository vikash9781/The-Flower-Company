import { VscAccount } from "react-icons/vsc";
import { IoSearchSharp } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchValue from "./SearchValue";


export default function Navbar({currency,setCurrency,dataa,setDataa}) {
 
  const [open , setOpen] = useState(false)
  const [search , setSearch] = useState(false)
  const navigate = useNavigate();

  function searchHandler(){
    setSearch(() => !search)
  }

  function changeHandler(event){
    event.preventDefault()
    const selectedCurrency = event.target.value
    setCurrency(selectedCurrency)
    console.log(selectedCurrency)
  }

  function navigateToCart(){
      navigate('/cart')
  }
  return (
    <div className="bg-white  sticky top-0 z-[160]">
    <div className='bg-white w-full '>

        <div className='border pb-4'>
        <div className='flex flex-row justify-between mt-6'>
        <select className='ml-8 text-xs' onChange={changeHandler} value={currency}>
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="CAD">CAD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
        </select>
        <NavLink to='/'>
      <span className="fontsize" >THE FLOWER COMPANY</span>
      </NavLink>


<div className='flex flex-row mr-8 gap-4 text-xl mt-6'>
<VscAccount onClick={() => {navigate('/login')}}/>
      <IoSearchSharp onClick={searchHandler} />
      <IoBagOutline onClick={navigateToCart}/>
</div>
    

        </div>

        <div className='flex justify-center  items-center'>
        <div className='w-[60vw]'>
            <div  className='flex flex-row justify-around text-xs  '>
              <div className="relative group:" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                
              <NavLink to='/collectionShop'>
              <div className="relative" >SHOP BY COLLECTIONS
                <span className="absolute -bottom-2 -left-2 -right-2 h-[2px]
                origin-left  rounded-full bg-gray-900
                transition-transform duration-300 ease-out"
                style={{
                  transform : open ? "scaleX(1)": "scaleX(0)"
                }}
                >
                </span>
              
              </div>

              </NavLink>
              

              
              </div>
              <br/>
             
                
               <NavLink to='/'>

                <div>HOME</div>

                </NavLink>
                
                <NavLink to='/occasionShop'>
                <div>SHOP BY OCCASION</div>
                </NavLink>
                
                <NavLink to='/floral'>
                <div>FLORAL DECOR</div>
                </NavLink>
                
                <NavLink to='/city'>
                <div>CHOOSE YOUR CITY</div>
                </NavLink>
                
            </div>
        </div>
        </div>
        </div>

    </div>
    <div>
    {
      search ? <SearchValue dataa = {dataa} setDataa = {setDataa} 
      searchHandler = {searchHandler} setSearch ={setSearch}
      currency={currency} setCurrency={setCurrency}/> : <div></div>
    }
    </div>
    
    </div>
  )
}
