import { createContext,useContext,useState,useEffect } from "react";
import axios from "axios";
import { useReducer } from "react/cjs/react.production.min";
import { wishlistReducer } from "./WishlistReducer";
import Toast from "components/Toast/Toast";


const WishlistContext = createContext();

const useWishlist = () => useContext(WishlistContext);

const initialWishlistState = {wishlist:[], wishlistCount:0}
const token = localStorage.getItem("Token");
const header = {
    header:{
        authorization:token
    }
}

const WishlistProvider = ({children}) =>{
    const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer,initialWishlistState)

    const getWishlist = async()=>{
        try{
            const response = await axios.get("/api/user/wishlist",header)
            if(response.status===200){
                wishlistDispatch({type:"GET_WISHLIST", payload:response?.data?.wishlist})
            }
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getWishlist()
    },[])

    const addToWishlist = async(product) =>{
        if(wishlistState.wishlist.some((item)=>item._id===product._id)){
            removeFromWishlist(product)
        }else{
            try{
                const response = await axios.post("/api/user/wishlist",{product},header)
                if(response.status === 201){
                    wishlistDispatch({type:"ADD_TO_WISHLIST", payload:response?.data?.wishlist})
                }
                Toast({
                    type:"info",
                    message:`${product.name} is waiting to see you!`
                })
            } catch(error){
                Toast({
                    type:"error",
                    message:"Something broke. Where's my glasses."
                })
                console.log(error)
            }
        }

    }

    const removeFromWishlist = async(product) =>{
        try{
            const response = await axios.delete(`/api/user/wishlist/${product._id}`,header)
            if(response.status === 200){
                wishlistDispatch({type:"DELETE_FROM_WISHLIST", payload:response?.data?.wishlist})
            }
            Toast({
                type:"info",
                message:`${product.name} is waiting to see you!`
            })
        } catch(error){
            Toast({
                type:"error",
                message:"Someone's here. Where's my glasses."
            })
            console.log(error)
        }
    }
    return (
        <WishlistContext.Provider
        value={{
            wishlist: wishlistState.wishlist,
            wishlistCount:wishlistState.wishlistCount,
            addToWishlist,
            removeFromWishlist
        }}>{children}</WishlistContext.Provider>
    )
}


export { useWishlist, WishlistProvider}

