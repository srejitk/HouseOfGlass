import React from 'react'
import { useFilter } from './FilterContext'

export default function Filters() {

    const {dispatch,state} = useFilter()
  return (
    <div className="filter ">

      <div className="filter-header-container"><h5 className="header-5">Filters</h5>
      <button className="btn btn--small" onClick={()=> dispatch({type:"CLEAR"})}>CLEAR</button></div>

<div className='position-relative category-wrapper'>
  <div className="category-label-container flex-mid-center">
    <span className="material-icons">sort</span>
    <h6 className='subtitle-1'>Sort</h6>
  </div>
  <div className="pill  align-center gap20 flex-mid-center">
    <span className="material-icons">swap_vertical_circle</span>
    <label htmlFor="high-to-low ">High to Low</label>
    <input type="radio" name="SORTBY" checked={state.sortBy==="HIGHTOLOW"} id="high-to-low" onChange={()=>dispatch({type:"SORTBY", payload:"HIGHTOLOW"})}/>
    </div>
    <div className="pill  align-center gap20 flex-mid-center">
    <span className="material-icons" >swap_vertical_circle</span>
    <label htmlFor="low-to-high">Low To High</label>
    <input type="radio" name="SORTBY" checked={state.sortBy==="LOWTOHIGH"} id="low-to-high" onChange={()=>dispatch({type:"SORTBY", payload:"LOWTOHIGH"})}/>
    </div>
    </div>
<div className='position-relative category-wrapper'>
  <div className="category-label-container flex-mid-center">
    <span className="material-icons">filter</span>
    <h6 className='subtitle-1'>Filter</h6>
  </div>
  <div className="pill  align-center gap20 flex-mid-center">
    <span className="material-icons" >bolt</span>
    <label htmlFor="fast-delivery">Fast Delivery</label>
    <input 
    type="checkbox" 
    name="FASTDELIVERY" 
    checked={state.fastDelivery===true?true:false} 
    id="fast-delivery" 
    onChange={(e)=>dispatch({type:"FASTDELIVERY", payload:e.target.checked})}/>
    </div>
    <div className="pill  align-center gap20 flex-mid-center">
    <span className="material-icons">production_quantity_limits</span>
    <label htmlFor="out-of-stock">Exclude Out Of Stock</label>
    <input 
    type="checkbox" 
    name="OUTOFSTOCK" 
    checked={state.outOfStock===true?true:false} 
    id="out-of-stock" 
    onChange={(e)=>dispatch({type:"OUTOFSTOCK", payload:e.target.checked})}/>
      </div>
    </div>

<div className='position-relative category-wrapper'>
  <div className="category-label-container flex-mid-center">
    <span className="material-icons">category</span>
    <h6 className='subtitle-1'>Brand</h6>
  </div>

<div className="pill  align-center gap20 flex-mid-center">
    <span className="material-icons">production_quantity_limits</span>
    <label htmlFor="category-1">John Jacobs</label>
    <input 
    type="checkbox" 
    name="CATEGORY" 
    value="JOHNJACOBS"
    checked={state.categoryState.find((category)=>category==="JOHNJACOBS")?true:false} 
    id="category-1" 
    onChange={(e)=>dispatch({type:"CATEGORY", payload:e.target.value})}/>
      </div>
<div className="pill  align-center gap20 flex-mid-center">
    <span className="material-icons">production_quantity_limits</span>
    <label htmlFor="category-1">Vogue</label>
    <input 
    type="checkbox" 
    name="CATEGORY" 
    value="VOGUE"
    checked={state.categoryState.find((category)=>category==="VOGUE")?true:false} 
    id="category-1" 
    onChange={(e)=>dispatch({type:"CATEGORY", payload:e.target.value})}/>
      </div>
      
      <div className="pill  align-center gap20 flex-mid-center">
    <span className="material-icons">production_quantity_limits</span>
    <label htmlFor="category-1">Ray Ban</label>
    <input 
    type="checkbox" 
    name="CATEGORY" 
    value="RAYBAN"
    checked={state.categoryState.find((category)=>category==="RAYBAN")?true:false} 
    id="category-1" 
    onChange={(e)=>dispatch({type:"CATEGORY", payload:e.target.value})}/>
      </div>


      <div className="pill  align-center gap20 flex-mid-center">
    <span className="material-icons">production_quantity_limits</span>
    <label htmlFor="category-1">John Jacobs</label>
    <input 
    type="checkbox" 
    name="CATEGORY" 
    value="VINCENTCHASE"
    checked={state.categoryState.find((category)=>category==="VINCENTCHASE")?true:false} 
    id="category-1" 
    onChange={(e)=>dispatch({type:"CATEGORY", payload:e.target.value})}/>
      </div>
</div>
<label htmlFor='price-range'>Range</label>
<input id="price-range"type="range" value={state.minPrice} max={12000} min={0} step={500} list="steps" onChange={(e)=>dispatch({type:"PRICERANGE" , payload:e.target.value})}></input>
      
<datalist id="steps">
  <option value="1K"/>
</datalist>
</div>
  )
}
