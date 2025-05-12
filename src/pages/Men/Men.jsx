import React from 'react'
import ProductSelect from '../../components/ProductSelect/ProductSelect.jsx'
import { men } from '../../api/shoeList.js'

export default function Men() {
    return (
        <div>
            <ProductSelect data={men}></ProductSelect>
        </div>
    )
}
