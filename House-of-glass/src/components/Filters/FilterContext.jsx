import { createContext,useContext, useReducer,useEffect,useState } from "react";
import { getProductList } from "./FilterCompose";
import { FilterReducer } from "./FilterReducer";
import { products } from "backend/db/products";

const FilterContext = createContext();


//useContext in itself a func , and useFilter is a custom Hook so you have to assign it as a func instead of making it a variable
const useFilter = () => useContext(FilterContext);


// const [data, setData]=useState([]);

// TO BE ADDED LATER
//     useEffect(()=>{
//         (async()=>{
//             const response = await axios.get("/api/products")
//             let {data} = response;
//             let {products} = data;
//             setData(products);
//     })()
//     },[]
//     )



const FilterProvider = ({children})=>{
    const [state,dispatch]=useReducer(FilterReducer,{sortBy:"",fastDelivery:false,outOfStock:false,categoryState:[],minPrice:12000})
    

    const finalProductList = getProductList(state,products);

    return (<FilterContext.Provider value={{state,dispatch,finalProductList}} >{children}</FilterContext.Provider>)
}

export {useFilter, FilterProvider}