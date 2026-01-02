import { captureOwnerStack, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Product from "../pages/Product";
import { Await, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/utils.js"
 export const ShopContext = createContext();

 const ShopContextProvider = (props) =>{
    const currency = '$';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState('');
    const [showSearch , setShowSearch] = useState(false);
    const [ cardItems, setCardItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token,setToken] = useState('');
    const navigate = useNavigate();




    const addToCard = async (itemId , size) =>{

      if(!size ){
         toast.error("Select product size")
         return
      }
         
      let cardData = structuredClone(cardItems);

      if(cardData[itemId]){
         if(cardData[itemId][size]){
            cardData[itemId][size] += 1;
         }else{
            cardData[itemId][size] = 1;
         }
      }else{
         cardData[itemId] = {};
         cardData[itemId][size] = 1;  

      }
      setCardItems(cardData)

    }

  const getCardCount =()=>{
    
   let totalCount = 0;

   for(const items in cardItems){
      for(const item in cardItems[items]){
         try {
            if(cardItems[items][item] > 0){
               totalCount += cardItems[items][item];
            }

         } catch (error) {
            
         }
      }
   }
   return totalCount;

  }


 const updateQuantity = async (itemId, size, quantity) => {
  let cartData = structuredClone(cardItems);

  // delete case
  if (quantity === 0) {
    delete cartData[itemId][size];

    // agar product me koi size nahi bacha → pura product remove
    if (Object.keys(cartData[itemId]).length === 0) {
      delete cartData[itemId];
    }

    setCardItems(cartData);

    toast.success("Item removed from cart!");
    return;
  }

  // update quantity case
  cartData[itemId][size] = quantity;
  setCardItems(cartData);
};




const getCardAmount =  ()=>{
   let totalAmount = 0;
   for(const items in cardItems){
      let itemInfo = products.find((product) => product._id === items);
      for(const item in cardItems[items])
         try {
            if(cardItems[items][item] > 0 ){
               totalAmount += itemInfo.price * cardItems[items][item]
            }
         } catch (error) {
            
         }
   }


   return totalAmount;
}


const getProductData = async () => {
  try {
    const response = await axiosInstance.get("/api/product/list");
   if(response.data.success){

   
    setProducts(response.data.products);
   }else{
      toast.error(response.data.message)
   }
  } catch (error) {
    console.error("API ERROR:", error);
  }
};


useEffect(()=>{
getProductData()
},[])

   //  useEffect(()=>{
   //     console.log(cardItems) 
   //  },[cardItems])

    const value = {
             products , currency , delivery_fee,
             search,setSearch,showSearch,setShowSearch,
             cardItems, addToCard, 
             getCardCount, updateQuantity, getCardAmount, navigate ,
              backendUrl, setToken,token
    }         

    return (
        <ShopContext.Provider  value={value}>
           {props.children}
        </ShopContext.Provider>
    )
 }

 export default ShopContextProvider