import React from 'react'
import VerticalCard from 'components/Cards/Vertical/VerticalCard';
import Filters from 'components/Filters/Filters';
import { useFilter } from 'components/Filters/FilterContext';

export default function ProductList() {

    const {finalProductList} = useFilter()

  return (
      <div className="content flex--row--wrap products-container">
          <Filters/>
          {finalProductList.map((item)=>(
              <VerticalCard CardTitle={item.name} ItemPrice= {item.price} ItemDiscount={item.discount} DeliveryType={item.fastDelivery?"Fast Delivery": "Regular"} ItemImage={item.imageUrl} ItemRating={item.rating}/>
          ))}
      </div>
  )
}
