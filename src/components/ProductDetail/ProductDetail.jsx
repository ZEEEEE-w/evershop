import React, { useState } from 'react'
import './ProductDetail.scss'
import { useParams } from 'react-router-dom';
import { kids, women, men } from '../../api/shoeList.js'
import Navigation from '../../components/Navigation/Navigation.jsx'
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/modules/cartSlice.js';



export default function ProductDetail() {

  const { id } = useParams(); // get :id from the URL
  const allProducts = [
    ...kids.products,
    ...women.products,
    ...men.products,
  ]
  const product = allProducts.find((item) => (
    item.id == id
  ))
  const dispatch = useDispatch();

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const addCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
    } else {
      const selectedProduct = {
        ...product,
        selectedSize,
        selectedColor,
        quantity,
      }
      dispatch(addItem(selectedProduct))
    }
  }


  return (
    <div className="productDetail">
      <Navigation></Navigation>
      <div className="container">
        <nav className="breadcrumb">
          <a href="/">Home</a> / <a href={`/${product.category}`}>{product.category}</a> / {product.title}
        </nav>
        <div className="product-content">
          <div className="image-gallery">
            <img
              className="main-image"
              src={product.img}
              alt={product.title}
            />
            <div className="thumbnail-list">
              <img
                src={product.img}
                alt={product.title}
              />
              <img
                src={product.img}
                alt={product.title}
              />
            </div>
          </div>

          <div className="product-details">
            <h1 className="product-title">{product.title}</h1>
            <p className="price">${product.price}</p>
            <p className="sku">Sku: {product.sku}</p>
            <ul className="specs">
              <li>Brand: {product.brand}</li>
              <li>Color: {product.color}</li>
            </ul>

            <div className="options">
              <div className="option-group">
                <span className="option-label">Size</span>
                <div className="option-buttons">
                  {product.size.map((sizeItem, index) => (
                    <button
                      key={index}
                      className={selectedSize === sizeItem ? 'selected' : ''}
                      onClick={() => setSelectedSize(sizeItem)}>{sizeItem}</button>
                  ))}
                </div>
              </div>
              <div className="option-group">
                <span className="option-label">Color</span>
                <div className="option-buttons">
                  {product.color.map((colorItem, index) => (
                    <button
                      key={index}
                      className={selectedColor === colorItem ? 'selected' : ''}
                      onClick={() => setSelectedColor(colorItem)}>{colorItem}</button>
                  ))}
                </div>
              </div>
            </div>

            <div className="quantity-container">
              <span className="quantity-label">Quantity</span>
              <input className="quantity" type="number" min="1" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
            </div>

            <button className="add-to-cart" onClick={addCart}>ADD TO CART</button>

            <div className="description">
              <p>Product Description.</p>
              <p>Integer porttitor elit id euismod elementum. Nulla vel molestie massa, eget iaculis elit. Quisque a tortor vel lectus ultricies pretium quis non purus. Pellentesque molestie leo eget rutrum tristique.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}