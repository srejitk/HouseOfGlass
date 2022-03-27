import { createContext,useContext, useReducer,useEffect,useState } from "react";
import { getProductList } from "./FilterCompose";
import { FilterReducer } from "./FilterReducer";
import { products } from "backend/db/products";

const FilterContext = createContext();

const useFilter = () => useContext(FilterContext);

const FilterProvider = ({children})=>{
    const [state,dispatch]=useReducer(FilterReducer,{sortBy:"",fastDelivery:false,outOfStock:false,categoryState:[],minPrice:12000})
    

    const finalProductList = getProductList(state,products);

    return (<FilterContext.Provider value={{state,dispatch,finalProductList}} >{children}</FilterContext.Provider>)
}

export {useFilter, FilterProvider}