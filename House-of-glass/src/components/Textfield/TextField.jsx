import React from 'react'

export default function TextField({props}) {

    const {type,placeholder,id,name,className,required}= props
  return (
    <div className="input__container">
    <input type={type} name={name} placeholder={placeholder} id={id} className={`input__field glass__input glass__input--email ${className}`}  />
    </div>
  )
}
