import React, { useState } from 'react';
import Product from './Product';
import aboutImg from '../aboutIMG.jpg';
import poetryimg from '../PoetryImg.jpg'



function Home({ dataa, setDataa, currency, setCurrency }) {
  const image = aboutImg
  const imgPoetry = poetryimg
  console.log(currency)
  console.log(dataa);
  const homeData = dataa.slice(0, 5)
  const classicMix = dataa.slice(4, 5)
  const classicGrande = dataa.slice(16, 17)
  const lily = dataa.slice(6, 7)

  const [showLily, setShowLily] = useState(true)
  const [showClassicMix, setShowClassicMix] = useState(false)
  const [showClassicGrande, setShowClassicGrande] = useState(false)
  const [seller, setSeller] = useState(true);
  const [addOn, setAddOn] = useState(false);
  const [poetry, setPoetry] = useState(true)
  console.log(addOn)

  function lilyHandler() {
    setShowLily(true)
    setShowClassicGrande(false)
    setShowClassicMix(false)
  }

  function classicGrandeHandler() {
    setShowLily(false)
    setShowClassicGrande(true)
    setShowClassicMix(false)
  }

  function classicMixHandler() {
    setShowLily(false)
    setShowClassicGrande(false)
    setShowClassicMix(true)
  }

  function aboutHandler() {
    setPoetry(true)
  }

  function poetryHandler() {
    setPoetry(false)
  }

  function sellerAddon() {
    setAddOn(true)
    setSeller(false)
  }

  function showSeller() {
    setSeller(true)
    setAddOn(false)
  }

  return (
    <div className='mb-7 w-full'>
      <div className='overflow-hidden'>
        <img src='https://theflowercompany.in/cdn/shop/files/collection_1_1400x.png?v=1686725089' className='scale-125 hover:scale-100 duration-[5s] w-full' alt='floweer' />
      </div>


      <div className='flex justify-center items-center gap-9 mt-16 mb-12 font-lg w-screen'>
        <div>
          <div onClick={showSeller} className='hover:cursor-pointer'>
            BEST SELLERS
          </div>

        </div>

        <div>
          <div onClick={sellerAddon} className='hover:cursor-pointer'>
            ADD ONS
          </div>
        </div>
      </div>
      <br />
      <br />
      <div>
        {
          seller ?
            <div className='flex gap-x-7 h-[450] w-[435]'>
              {
                homeData.map((dataaa) => {
                  return <Product key={dataaa.id} {...dataaa} dataaa={dataaa} setDataa={setDataa} currency={currency} setCurrency={setCurrency} />
                })
              }
            </div> :
            <div className='flex flex-col justify-center items-center'>
              <button>VIEW ALL PRODUCTS</button>

            </div>
        }
      </div>

      <div className='flex w-full justify-stretch mt-16'>
      <div className='h-[480px] w-[450px] overflow-hidden'>
          <div className='absolute  z-[50] text-white text-2xl mt-56 ml-28 '>PETITE ROSES</div>
          <img src='https://theflowercompany.in/cdn/shop/products/Classic-Bunch_400x.jpg?v=1571737877' className="h-[480px] w-[450px] hover:scale-125 duration-[5s]" alt='petite Ronde' />
        </div>
        <div className='h-[480px] w-[450px] overflow-hidden'>
          <div className='absolute  z-[50] text-white text-2xl mt-56 ml-28 '>CLASSIC RONDE</div>
          <img src='https://theflowercompany.in/cdn/shop/products/IMG_6593_400x.jpg?v=1580809429' className="h-[480px] w-[450px] hover:scale-125 duration-[5s]" alt='classic grande' />
        </div>
        <div className='h-[480px] w-[450px] overflow-hidden'>
          <div className='absolute  z-[50] text-white text-2xl mt-56 ml-28 '>PETITE ROSES</div>
          <img src='https://theflowercompany.in/cdn/shop/products/Classic-Bunch_400x.jpg?v=1571737877' className="h-[480px] w-[450px] hover:scale-125 duration-[5s]" alt='petite Ronde' />
        </div>
        <div className='h-[480px] w-[450px] overflow-hidden'>
          <div className='absolute  z-[50] text-white text-2xl mt-56 ml-28 '>CLASSIC GRANDE</div>
          <img src='https://theflowercompany.in/cdn/shop/products/classicmix-bunch_400x.jpg?v=1636530961' className="h-[480px] w-[450px] hover:scale-125 duration-[5s]" alt='flower' />
          <div className='absolute  z-[50] text-white text-2xl mt-56 ml-28 '>PETITE ROSES</div>
          <img src='https://theflowercompany.in/cdn/shop/products/Classic-Bunch_400x.jpg?v=1571737877' className="h-[480px] w-[450px] hover:scale-125 duration-[5s]" alt='petite Ronde' />
          <div className='absolute  z-[50] text-white text-2xl mt-56 ml-28 '>PETITE ROSES</div>
          <img src='https://theflowercompany.in/cdn/shop/products/Classic-Bunch_400x.jpg?v=1571737877' className="h-[480px] w-[450px] hover:scale-125 duration-[5s]" alt='petite Ronde' />
          <div className='absolute  z-[50] text-white text-2xl mt-56 ml-28 overflow-hidden'>PETITE ROSES</div>
        <img src='https://theflowercompany.in/cdn/shop/products/Classic-Bunch_400x.jpg?v=1571737877' className="h-[480px] w-[450px] hover:scale-125 duration-[5s]" alt='petite Ronde' />

        </div>
        
      </div>

      <div className='mt-20 ml-16'>
        {
          poetry ? (
            <div className='flex text-xs'>
              <img src={image} alt='about' className='h-[570px] w-[560px]' />
              <div className='flex flex-col justify-center items-center ml-16'>
                <h2 className='text-xl'>THE FLOWER COMPANY TALE</h2>
                <br />
                <p>Each milestone, each relationship, every kind of bond calls for a unique<br />
                  celebration. A celebration of moments and emotions that are just<br />
                  blooming, even celebrating those that have already blossomed. For<br />
                  such moments, there are luxury flower arrangements by The Flower<br />
                  Company.<br />
                  Aesthetically appealing to the eye, these flower arrangements mark<br />
                  the strength of a bond, bring out the butterfly-blushed smile of an 18-<br />
                  year-old girl, highlight the rouge on a mother’s face when she hears<br />
                  from her distant son. These flowers laden this moment with beauty,<br />
                  luxury and panache and evoke a part of you that only poetry can do<br />
                  justice to.</p>
              </div>
            </div>
          ) : (<div className='flex'>
            <img src={imgPoetry} alt="imagepoet" className='h-[570px] w-[560px]' />
            <div className='flex flex-col justify-center items-center ml-16 text-xs'>
              <h2 className='text-xl'>Poetry In A Box</h2>
              <p>
                Aesthetically appealing to the eye, these flower arrangements mark<br />
                the strength of a bond, bring out the butterfly-blushed smile of an 18-<br />
                year-old girl, highlight the rouge on a mother’s face when she hears<br />
                from her distant son. These flowers laden this moment with beauty,<br />
                luxury and panache and evoke a part of you that only poetry can do<br />
                justice to.<br />
                <br />
                The Flower Company birthed from this ardent need to make a<br />
                moment, any special such moment, between individuals, look as<br />
                beautiful as it feels – An ethereal gifting solution.<br />
                <br />
                Once you have experienced this picturesque luxury, you’ll know it feels<br />
                like gifting or receiving<br />
                <br />
                #PoetryInABox
              </p>
            </div>
          </div>)
        }
      </div>
      <br />

      <div className='flex flex-row justify-center items-center gap-10'>
        <div onClick={aboutHandler} className="hover:cursor-pointer">about</div>
        <div onClick={poetryHandler} className='hover:cursor-pointer'>Poetry In a Box</div>
      </div>
      <br />
      <br />
      <br />
      <div className='w-full border'></div>
      <br />
      <br />
      <br />
      <div className='flex justify-center items-center mb-20 text-xl'><h1>FEATURED PRODUCTS</h1></div>

      <div className=''>
        <div className='flex flex-row justify-evenly'>
          <div>
            <div className='w-[16px] h-[16px] border rounded-full bg-white absolute text-white ml-[78px] mt-[340px] text-sm cursor-pointer' onClick={classicMixHandler}></div>
            <div className='w-[16px] h-[16px] border rounded-full bg-white absolute text-white ml-[250px] mt-48 text-sm cursor-pointer' onClick={lilyHandler}></div>
            <div className='w-[16px] h-[16px] border rounded-full bg-white absolute text-white ml-[110px] mt-[450px] text-sm cursor-pointer' onClick={classicGrandeHandler}></div>
            <img src='https://theflowercompany.in/cdn/shop/files/7U4A8688_400x.progressive.jpg?v=1614298759 ' className='h-[550px] w-[345px]' alt='flower' />
          </div>
          <div>
            <div className='flex flex-col justify-center items-center text-sm'>
              {
                showLily && lily.map((dataaa) => {
                  return <Product key={dataaa.id} {...dataaa} dataaa={dataaa} setDataa={setDataa} currency={currency} setCurrency={setCurrency} /> })
              }
              {
                showClassicMix && classicMix.map((dataaa) => {
                  return <Product key={dataaa.id} {...dataaa} dataaa={dataaa} setDataa={setDataa} currency={currency} setCurrency={setCurrency} />})
              }

              {
                showClassicGrande && classicGrande.map((dataaa) => {
                  return <Product  key={dataaa.id} {...dataaa} dataaa={dataaa} setDataa={setDataa} currency={currency} setCurrency={setCurrency} /> })
              }

              <button className='mt-10 bg-pink-300 border border-pink-300 text-xs py-2 px-6 hover:bg-transparent hover:animate-pulse duration-500' >VIEW THIS PRODUCT</button>

              <div className='flex flex-row gap-4'>
                <div className='w-[10px] h-[10px] border rounded-full border-black hover:bg-black mt-6' onClick={lilyHandler} ></div>
                <div className='w-[10px] h-[10px] border rounded-full border-black hover:bg-black mt-6' onClick={classicMixHandler}></div>
                <div className='w-[10px] h-[10px] border rounded-full border-black hover:bg-black mt-6' onClick={classicGrandeHandler}></div>
              </div>


            </div>

          </div>
        </div>
      </div>




    </div>
  );
}

export default Home;
