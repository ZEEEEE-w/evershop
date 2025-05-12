import React from 'react'
import Navigation from '../../components/Navigation/Navigation.jsx'
import { useDispatch, useSelector } from 'react-redux'
import "./Cart.scss"
import { addItem, removeItem, lessItem } from '../../store/modules/cartSlice.js'
import Footer from '../../components/Footer/Footer.jsx'
import { Link } from 'react-router-dom'

export default function Cart() {
	const { items, total } = useSelector((state) => state.cart)
	const dispatch = useDispatch()
	return (
		<div>
			<Navigation></Navigation>

			<div className="cart">
				{items.length === 0 ? <div className='emptyCart'> Your cart is empty! <Link to='/'><button className='gotoShop'>CONTINUE SHOPPING</button></Link></div> : <div className="cart-container">
					<div className="cart-items">
						<div className="items-header">
							<span className="col-product">item</span>
							<span className="col-price">PRICE</span>
							<span className="col-qty">QUANTITY</span>
							<span className="col-total">TOTAL</span>
						</div>
						{/* Cart Info */}
						{(items.map((item, index) => (
							<div className="cart-item" key={index}>
								<div className="product-cell">
									<Link to={`/ProductDetail/${item.id}`}>
									<img
										className="product-img"
										src={item.img}
										alt=""
									/>
									</Link>
									<div className="product-meta">
										<Link to={`/ProductDetail/${item.id}`}><h3 className="product-title">{item.title}</h3></Link>
										<p className="product-option">{item.selectedColor}</p>
										<p className="product-option">{item.selectedSize}</p>
										<button className="remove-link" onClick={() => dispatch(removeItem(item))}>Remove</button>
									</div>
								</div>
								<div className="price-cell">${item.price}</div>
								<div className="qty-cell">
									<button className="qty-btn" onClick={() => dispatch(lessItem(item))} >-</button>
									<span className="qty-num">{item.quantity}</span>
									<button className="qty-btn" onClick={() => dispatch(addItem(item))}>+</button>
								</div>
								<div className="total-cell">{item.quantity * item.price}</div>
							</div>
						)))}
						<div className="promo-section">
							<label className="promo-label">Promotion code?</label>
							<div className="promo-input">
								<input
									type="text"
									className="promo-field"
									placeholder="Enter coupon code"
								/>
								<button className="promo-btn">Apply</button>
							</div>
						</div>
					</div>
					<div className="order-summary">
						<h2 className="summary-title">Order summary</h2>
						<div className="summary-row">
							<span>Sub total</span>
							<span>${total}</span>
						</div>
						<div className="summary-row total">
							<span>Total</span>
							<span>${total}</span>
						</div>
						<p className="tax-note">(Inclusive of tax $0.00)</p>
						<button className="checkout-btn">CHECKOUT</button>
					</div>
				</div>}

			</div>

			<Footer></Footer>
		</div>
	)
}
