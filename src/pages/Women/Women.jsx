import React from 'react'
import ProductSelect from '../../components/ProductSelect/ProductSelect.jsx'
import { women } from '../../api/shoeList.js'

export default function Women() {
  return (
    <div>
        <ProductSelect data={women}></ProductSelect>
    </div>
  )
}
