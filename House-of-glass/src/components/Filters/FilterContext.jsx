import { createContext,useContext, useReducer,useEffect,useState } from "react";
import { getProductList } from "./FilterCompose";
import { FilterReducer } from "./FilterReducer";
import { products } from "backend/db/products";

const FilterContext = createContext();

const useFilter = useContext(FilterContext);
// const [data, setData]=useState([]);


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
    const [state,dispatch]=useReducer(FilterReducer,{sortBy:"",fastDelivery:"",outOfStock:""})
    

    const finalProductList = getProductList(state,products);
    console.log(productList)

    return <FilterContext.Provider value={{state,dispatch,finalProductList}} >{children}</FilterContext.Provider>
}

export {useFilter, FilterProvider}