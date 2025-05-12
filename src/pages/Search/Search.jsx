import React from 'react'
import Navigation from '../../components/Navigation/Navigation.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import { useSelector } from 'react-redux'
import './Search.scss'

export default function Search() {
  const { items,searchKeyword } = useSelector((state) => state.search)
  console.log(items,searchKeyword);

  return (
    <div>
      <Navigation></Navigation>
      <div className="search-container">
        <h1>{`Search results for "${searchKeyword}" `}</h1>
        <ul className='search-productList'>
          {items.map((product) => (
            <li className='productItem' key={product.id}>
              <a href={`/ProductDetail/${product.id}`} className='itemImg'>
                <img src={product.img} alt={product.title} />
              </a>
              <a href={`/ProductDetail/${product.id} `} className="itemTitle">{product.title}</a>
              <p className='itemPrice'>${product.price}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer></Footer>
    </div>
  )
}
