import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()
    const[inputData, setInputData] = useState({
        email : "",
        password : ""
    })

    function changeHandler(event){
        setInputData((predata) =>({
           ...predata,
           [event.target.name] : [event.target.value]

        }))
    }

    function submitHandler(){
      navigate('/')
    }
  return (
    
    <div className='flex flex-col justify-center items-center my-24 '>
        <form onSubmit={submitHandler}>


      <div className='py-2 text-center'>LOGIN</div>


      <p className='py-6 text-center text-xs'>Please enter your e-mail and Password</p>


      <input 
      className='px-2 py-3 text-xs w-[400px] border'
      type='email' 
      required 
      value={inputData.email} 
      name = "email"
      onChange={changeHandler}
      placeholder='Email'/>
      <br/>

<br/>
      <input
      className='px-2 py-3 text-xs w-[400px] border'
      
      type='password'
      required
      value={inputData.password}
      onChange={changeHandler}
      name='password'
      placeholder='password'/>
<br/>


<br/>
      <button className='py-2 text-center text-sm items-center w-[400px] border bg-pink-300'>
        LOGIN
      </button>
      </form>


    </div>

  )
}
