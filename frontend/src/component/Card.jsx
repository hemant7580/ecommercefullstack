import React, { useContext } from "react";
import { shopDataContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";


function Card({name, image, id, price}) {

    let {currency} = useContext(shopDataContext)
    let navigate = useNavigate()

    return (
        <div className="w-[300px] max-w-[90%] h-[400px] bg-[#ffffff0a] backdrop:blur-lg rounded-lg hover:scale-[102%] flex items-start justify-start flex-col p-[10px] cursor-pointer border-[1px] border-[#80808049] box-shadow: 1px 1px 20px #012290f7,
    1px 1px 40px #0053b8f7" onClick={()=>navigate(`/productdetail/${id}`)}>
            <img src={image} alt="" className="w-[100%] h-[80%] rounded-sm object-cover"/>
            <div className="text-[#c3f6fa] text-[18px] py-[10px]">{name}</div>
            <div className="text-[#f3fafa] text-[14px]">{currency}{price}</div>
        </div>
    )
}

export default Card


// import React, { useContext } from "react";
// import { shopDataContext } from "../context/ShopContext";
// import { useNavigate } from "react-router-dom";

// function Card({ name, image, id, price }) {
//   const { currency } = useContext(shopDataContext);
//   const navigate = useNavigate();

//   return (
//     <div
//       onClick={() => navigate(`/productdetail/${id}`)}
//       style={{
//         boxShadow: "1px 1px 20px #012290f7, 1px 1px 40px #0053b8f7",
//       }}
//       className="w-[300px] max-w-[90%] h-[400px] bg-[#ffffff0a] 
//       backdrop-blur-lg rounded-lg hover:scale-[1.02] transition-transform
//       flex flex-col p-[10px] cursor-pointer border border-[#80808049]"
//     >
//       <img
//         src={image}
//         alt={name}
//         className="w-full h-[80%] rounded-sm object-cover"
//       />

//       <div className="text-[#c3f6fa] text-[18px] py-[10px]">
//         {name}
//       </div>

//       <div className="text-[#f3fafa] text-[14px]">
//         {currency}{price}
//       </div>
//     </div>
//   );
// }

// export default Card;


