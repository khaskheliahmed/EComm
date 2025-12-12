import { captureOwnerStack, createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

 export const ShopContext = createContext();

 const ShopContextProvider = (props) =>{
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch , setShowSearch] = useState(false);
    const [ cardItems, setCardItems] = useState({});



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


   //  useEffect(()=>{
   //     console.log(cardItems) 
   //  },[cardItems])

    const value = {
             products , currency , delivery_fee,
             search,setSearch,showSearch,setShowSearch,
             cardItems, addToCard, 
             getCardCount
    }         

    return (
        <ShopContext.Provider  value={value}>
           {props.children}
        </ShopContext.Provider>
    )
 }

 export default ShopContextProvider