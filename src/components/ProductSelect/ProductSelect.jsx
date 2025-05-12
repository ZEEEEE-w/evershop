import React, { useEffect, useState } from 'react'
import './ProductSelect.scss'
import Navigation from '../../components/Navigation/Navigation.jsx'
import { Slider, Divider, Checkbox } from 'antd';

export default function ProductSelect(props) {

    const item = props.data.products;
    //useState to dynamically set the filtered items
    const [filteredItems, setFilteredItems] = useState(props.data.products);


    //find max price and min price
    const maxPrice = Math.max(...item.map(product => product.price));
    const minPrice = Math.min(...item.map(product => product.price));
    
    //useState to store price range size color brand
    const [filters, setFilters] = useState({
        priceRange: [minPrice, maxPrice],
        sizes: [],
        colors: [],
        brands: []
    });
        //filer items
        const applyFilters = () => {
            const { priceRange, sizes, colors, brands } = filters;
            const filtered = item.filter(product => {
                // price
                const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
                // size
                const sizeMatch = sizes.length === 0 ||
                    sizes.some(size => product.size.includes(size));
                // color
                const colorMatch = colors.length === 0 ||
                    colors.some(color => product.color.includes(color));
                // brand
                const brandMatch = brands.length === 0 ||
                    brands.includes(product.brand);
                return priceMatch && sizeMatch && colorMatch && brandMatch;
            });
    
            setFilteredItems(filtered);
        };

    const priceOnChange = value => {
        console.log('onChange: ', value);
    };
    const priceOnChangeComplete = value => {
        console.log('onChangeComplete: ', value);
        setFilters(prev => ({ ...prev, priceRange: value }));
    };
    const sizeOnChange = checkedValues => {
        console.log('checked = ', checkedValues);
        setFilters(prev => ({ ...prev, sizes: checkedValues }));
    };
    const colorOnChange = checkedValues => {
        console.log('checked = ', checkedValues);
        setFilters(prev => ({ ...prev, colors: checkedValues }));
    };
    const brandOnChange = checkedValues => {
        console.log('checked = ', checkedValues);
        setFilters(prev => ({ ...prev, brands: checkedValues }));
    };

    const sizes = [...item.map(product => product.size)];
    const colors = [...item.map(product => product.color)];
    const brands = [...item.map(product => product.brand)];

    const sizeOptions = [...new Set(sizes.flat())];
    const colorOptions = [...new Set(colors.flat())];
    const brandOptions = [...new Set(brands.flat())];



    useEffect(() => {
        applyFilters();
    }, [filters]);


    return (
        <div>
            <Navigation></Navigation>
            <div className="selectContainer">
                <nav className="breadcrumb">
                    <a href="/">Home</a> / <a href={`/${props.data.id}`}>{props.data.id}</a>
                </nav>
                <h1>{props.data.id}</h1>
                <div className="content">
                    <div className="sider">
                        <h3>Sort By</h3>
                        <p>Price</p>
                        <Slider
                            range
                            min={minPrice}
                            max={maxPrice}
                            step={10}
                            defaultValue={[minPrice, maxPrice]}
                            onChange={priceOnChange}
                            onChangeComplete={priceOnChangeComplete}
                        />
                        <div className="priceRange">
                            <span >${priceOnChange}</span>
                            <span >${priceOnChange}</span>
                        </div>
                        <p>SIZE</p>
                        <Divider style={{ margin: '0' }} />
                        <Checkbox.Group options={sizeOptions} onChange={sizeOnChange} style={{ flexDirection: 'column' }} />
                        <p>COLOR</p>
                        <Divider style={{ margin: '0' }} />
                        <Checkbox.Group options={colorOptions} onChange={colorOnChange} style={{ flexDirection: 'column' }} />
                        <p>BRAND</p>
                        <Divider style={{ margin: '0' }} />
                        <Checkbox.Group options={brandOptions} onChange={brandOnChange} style={{ flexDirection: 'column' }} />
                    </div>
                    <ul className='productList'>
                        {filteredItems.map((product) => (
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
            </div>

        </div>
    )
}
