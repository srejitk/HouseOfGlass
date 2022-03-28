

const hightolow =({sortBy},array)=>{
    switch(sortBy){
        case "HIGHTOLOW":
            return sortBy==="HIGHTOLOW"?[...array].sort((a,b)=>Number(b.price)- Number(a.price)):[...array];
        case "LOWTOHIGH":
            return sortBy==="LOWTOHIGH"?[...array].sort((a,b)=>Number(a.price)- Number(b.price)):[...array];
        default:
            return [...array]
    }

}

const lowtohigh =({sortBy},array)=>{
    let sortedList = sortBy==="LOWTOHIGH"?[...array].sort((a,b)=>Number(a.price)- Number(b.price)):[...array]
    return sortedList
}

const fastdelivery = ({fastDelivery},array)=>{
    let filteredList = fastDelivery?array.filter((item)=>item.fastDelivery):array
    return filteredList;
}

const outofstock = ({outOfStock},array)=>{
    let filteredList = outOfStock?array.filter((item)=>item.count>=1):array
    return filteredList;
}


const applyFilters = (state,...args)=>(ProductList)=>{
    return args.reduce((acc,curr)=>{
        return curr(state,acc)
    },ProductList)
}

const applyCategories = ({categoryState},array)=>{
    if ( categoryState.length===0){
        return array;
    }else{
        return array.filter((item)=>categoryState.includes(item.brand))
    }
}

const priceRange = ({minPrice}, array)=>{
    return array.filter((item)=>item.price<=minPrice)
}

const getProductList =(state,ProductList)=> applyFilters(
    state,
    hightolow,
    lowtohigh,
    fastdelivery,
    outofstock,
    applyCategories,
    priceRange
)(ProductList)

export {getProductList}