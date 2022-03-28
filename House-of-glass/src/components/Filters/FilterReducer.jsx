export const FilterReducer = (state, action)=>{
    const defaultState = {sortBy:"",fastDelivery:false,outOfStock:false,categoryState:[],minPrice:12000}
    switch(action.type){
        case "SORTBY":
            return {...state,sortBy:action.payload}
        case "FASTDELIVERY":
            return {...state, fastDelivery:action.payload}
        case "OUTOFSTOCK":
            return {...state,outOfStock:action.payload}
        case "CATEGORY":
            const {categoryState} = state;
            if(categoryState.includes(action.payload)){
                return {...state, categoryState : categoryState.filter((category)=>category!==action.payload)}
            }
            else{
                return {...state, categoryState: [...categoryState,action.payload]}
            }
            console.log(categoryState)
        case "PRICERANGE":
            return {...state, minPrice:action.payload}
        case "CLEAR":
            return defaultState
        default:
            return state;
    }
}