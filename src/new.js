// import  { useState, useEffect } from "react";
// import NewData from "../HeaderData/NewData.json";
// import { useDispatch, useSelector } from "react-redux";
// import ActionA from "../Redux/ActionA";
// const New = () => {
//     const [arr, setArr] = useState([]);
//     const [showMap, setShowMap] = useState(false);
//     const dispatch = useDispatch();
//     const cart = useSelector((state) => state.cart);
//     useEffect(() => {
//         const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//         setArr(storedCart);
//     }, []);
//     useEffect(() => {
//         localStorage.setItem("cart", JSON.stringify(cart));
//     }, [cart]);
//      const handleAddCart = (item) => {
//         dispatch(ActionA(item));
//         setArr([...arr, item]);
//     };
//     const handleFindStoreClick = () => {
//         setShowMap(!showMap);
//     };
//     return (
//         <>
//             <button
//                 className="text-white absolute top-4 left-4 hover:text-green-400"
//                 onClick={handleFindStoreClick}
//             >
//                 Find Store
//             </button>
//             {showMap && (
//                 <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56923.89001000818!2d75.67653924863282!3d26.91164630000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db522d8067a13%3A0x72c87fe7aa61be8a!2sNike%20By%20Vaishali%20Nagar!5e0!3m2!1sen!2sin!4v1720683347145!5m2!1sen!2sin"
//                     width="100%"
//                     height="450"
//                     style={{ border: 0 }}
//                     allowFullScreen
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//             )}
//             <div className="bg-gray-900 p-4">
//                 <div className="flex flex-wrap gap-6 justify-center items-center">
//                     <div className="w-full lg:w-1/2">
//                         <video className="w-full mt-4" autoPlay loop muted>
//                             <source
//                                 src="https://videos.pexels.com/video-files/6764393/6764393-uhd_2732_1440_25fps.mp4"
//                                 type="video/mp4"
//                             />
//                         </video>
//                         <div className="text-center mt-8">
//                             <h1 className="text-4xl lg:text-6xl font-extrabold text-white">
//                                 WIN ON AIR
//                             </h1>
//                             <p className="text-lg lg:text-xl text-white font-semibold mt-4">
//                                 Meet the next generation of Nike Air. Engineered to the exact
//                                 Specifications of championship athletes.
//                             </p>
//                         </div>
//                     </div>
//                     {NewData.map((item) => (
//                         <div
//                             key={item.title}
//                             className="text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
//                         >
//                             <img
//                                 className="mt-8 w-full max-w-xs mx-auto shadow-sm rounded-lg"
//                                 src={item.img}
//                                 alt=""
//                             />
//                             <h1 className="font-semibold text-white mt-4">{item.title}</h1>
//                             <p className="font-semibold text-gray-400 mt-2">
//                                 MRP : ₹ {item.price}
//                             </p>
//                             <button
//                                 className="border rounded-md w-full max-w-xs h-10 text-lg font-semibold bg-blue-500 mt-4"
//                                 onClick={() => handleAddCart(item)}
//                             >
//                                 Add Bag
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="border border-gray-400 mt-16"></div>
//                 <div>
//                     <div className="flex flex-wrap justify-center mt-16 gap-10">
//                         <img
//                             className="w-full max-w-md h-auto"
//                             src="https://images.pexels.com/photos/2404959/pexels-photo-2404959.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                             alt=""
//                         />
//                         <h1 className="text-white text-center lg:text-left mt-8 text-3xl lg:text-5xl font-bold">
//                             Nike
//                             <br />
//                             <span className="text-green-500 text-5xl lg:text-7xl font-semibold">
//                                 Best For Running
//                             </span>
//                             <br />
//                             <span className="text-5xl lg:text-7xl text-orange-500">You</span>
//                             <br />
//                             <span className="text-4xl lg:text-5xl font-bold text-red-400">
//                                 Choose Best.
//                             </span>
//                             <br />
//                             <span className="text-5xl lg:text-7xl text-blue-500">You</span>
//                             <br />
//                             <span className="text-4xl lg:text-5xl font-bold text-indigo-50">
//                                 Do Best.
//                             </span>
//                         </h1>
//                     </div>
//                     <div className="border border-gray-400 mt-16"></div>
//                     <div className="mt-16 flex flex-wrap justify-center gap-10">
//                         <div className="w-full sm:w-1/3">
//                             <ul className="text-xl lg:text-3xl text-gray-300">Resources</ul>
//                             <li className="text-lg font-semibold text-sky-500 mt-4">Find A Store</li>
//                             <li className="text-lg font-semibold text-sky-500"> Become A Member </li>
//                             <li className="text-lg font-semibold text-sky-500"> Send Us Feedback</li>
//                         </div>
//                         <div className="w-full sm:w-1/3">
//                             <ul className="text-xl lg:text-3xl text-gray-300">Help</ul>
//                             <li className="text-lg font-semibold text-sky-500 mt-4">Get Help</li>
//                             <li className="text-lg font-semibold text-sky-500">Order Status</li>
//                             <li className="text-lg font-semibold text-sky-500">Delivery</li>
//                             <li className="text-lg font-semibold text-sky-500">Returns</li>
//                         </div>
//                         <div className="w-full sm:w-1/3">
//                             <ul className="text-xl lg:text-3xl text-gray-300">Company</ul>
//                             <li className="text-lg font-semibold text-sky-500 mt-4">About Nike</li>
//                             <li className="text-lg font-semibold text-sky-500">News</li>
//                             <li className="text-lg font-semibold text-sky-500">Careers</li>
//                             <li className="text-lg font-semibold text-sky-500">Investors</li>
//                             <li className="text-lg font-semibold text-sky-500">Sustainability</li>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };
// export default New;