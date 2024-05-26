import React from 'react'

export default function DishImage(props:{imgUrl: string}) {
  return (
    <div>
        <img src={props.imgUrl} alt="" />
    </div>
  )
}
