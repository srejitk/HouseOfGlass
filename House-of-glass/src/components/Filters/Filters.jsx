import React from 'react'
import { useFilter } from './FilterContext'

export default function Filters() {

    const {dispatch,state} = useFilter()
  return (
    <div className="filter ">
    <div className="pill  align-center text--center gap20 flex-mid-center">
    <span class="material-icons">swap_vertical_circle</span>
    <label for="high-to-low ">High to Low</label>
    <input type="radio" name="SORTBY" checked={state.sortBy==="HIGHTOLOW"} id="high-to-low" onChange={()=>dispatch({type:"SORTBY", payload:"HIGHTOLOW"})}/>
    </div>
    <div className="pill  align-center text--center gap20 flex-mid-center">
    <span className="material-icons" >swap_vertical_circle</span>
    <label for="low-to-high">Low To High</label>
    <input type="radio" name="SORTBY" checked={state.sortBy==="LOWTOHIGH"} id="low-to-high" onChange={()=>dispatch({type:"SORTBY", payload:"LOWTOHIGH"})}/>
    </div>
    <div className="pill  align-center text--center gap20 flex-mid-center">
    <span className="material-icons" >bolt</span>
    <label for="fast-delivery">Fast Delivery</label>
    <input type="checkbox" name="FASTDELIVERY" checked={state.fastDelivery} id="fast-delivery" onChange={(e)=>dispatch({type:"FASTDELIVERY", payload:e.target.checked})}/>
    </div>
    <div className="pill  align-center text--center gap20 flex-mid-center">
    <span class="material-icons">production_quantity_limits</span>
    <label for="out-of-stock">Exclude Out Of Stock</label>
    <input type="checkbox" name="OUTOFSTOCK" checked={state.outOfStock} id="out-of-stock" onChange={(e)=>dispatch({type:"OUTOFSTOCK", payload:e.target.checked})}/>
      </div>
</div>
  )
}
