import React from 'react'
import { useParams } from 'react-router-dom'

export default function Category() {
    const params = useParams();
  return (
    <div>
        <h1>Category</h1>
        <h2>{params.id}</h2>
        
    </div>
  )
}
