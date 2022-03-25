export const FilterReducer = (state, action)=>{
    const defaultState = {sortBy:"",fastDelivery:false,outOfStock:false}
    switch(action.type){
        case "SORTBY":
            return {...state,sortBy:action.payload}
        case "FASTDELIVERY":
            return {...state, sortBy:action.payload}
        case "OUTOFSTOCK":
            return {...state,outOfStock:action.payload}
        case "CLEAR":
            return defaultState
        default:
            return state;
    }
}