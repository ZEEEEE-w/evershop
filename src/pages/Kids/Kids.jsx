import React from 'react'
import ProductSelect from '../../components/ProductSelect/ProductSelect.jsx'
import { kids } from '../../api/shoeList.js'



export default function Kids() {

    return (
        <div>
            <ProductSelect data={kids}></ProductSelect>
        </div>
    )
}
