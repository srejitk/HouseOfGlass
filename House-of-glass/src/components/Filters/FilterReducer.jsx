export const FilterReducer = (state, action)=>{
    const defaultState = {sortBy:"",fastDelivery:false,outOfStock:false,categoryState:[]}
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
                // return {...state, categoryState: [...categoryState,action.payload]}
                // TOH MERE CARTEGORY LIST MAI 4 BRANDS RAHENGE
                //IF THE CATEGORY IS ALREADY THERE , THEN WE WANT TO REMOVE IT BY FILTERING OUT THAT CATEGORY AND INSERTING ALL OTHER CATEGORIES
                return {...state, categoryState : categoryState.filter((category)=>category!==action.payload)}
                // console.log("IF WALA",categoryState)       
                // return test
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