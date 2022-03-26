

const hightolow =(state,array)=>{
    let sortedList = state.sortBy==="HIGHTOLOW"?[...array].sort((a,b)=>Number(a.price)- Number(b.price)):[...array];
    return sortedList
}

const lowtohigh =(state,array)=>{
    let sortedList = state.sortBy==="LOWTOHIGH"?[...array].sort((a,b)=>Number(b.price)- Number(a.price)):[...array]
    return sortedList
}

const fastdelivery = (state,array)=>{
    let filteredList = state.fastDelivery?array.filter((item)=>item.fastDelivery):array
    return filteredList;
}

const outofstock = (state,array)=>{
    let filteredList = state.outOfStock?array.filter((item)=>item.count>=1):array
    return filteredList;
}


const applyFilters = (state,...args)=>(ProductList)=>{
    return args.reduce((acc,curr)=>{
        return curr(state,acc)
    },ProductList)
}

const applyCategories = (state,array)=>{
    console.log("state",state)
    console.log("array",array)
    const {categoryState} = state;
    if ( categoryState.length===0){
        return array;
    }else{
        return array.filter((item)=>categoryState.includes(item.brand))
    }
}

const priceRange = (state, array)=>{
    const {minPrice}=state;
    return array.filter((item)=>item.price>=minPrice)
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