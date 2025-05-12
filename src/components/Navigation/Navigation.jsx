import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { searchItem } from '../../store/modules/searchSlice.js';

export default function Navigation() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { Search } = Input;
    const onSearch = (value) => {
        dispatch(searchItem(value));
        navigate('/search');
    };

    const shopItems = [
        {
            key: '1',
            label: (
                <a rel="noopener noreferrer" href="/kids">
                    Kids
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a rel="noopener noreferrer" href="/women">
                    Women
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a rel="noopener noreferrer" href="/men">
                    Men
                </a>
            ),
        },
    ];
    const searchItems = [
        {
            label: (
                <div onClick={(e) => e.stopPropagation()}>
                    <Search
                        placeholder="input search text"
                        onSearch={onSearch}
                        size="large"
                        style={{
                            width: '200px',
                            backgroundColor: 'transparent',
                        }}
                    />
                </div>
            ),
            key: 'search-box',
        },
    ];

    return (
        <div className='navigation'>

            <div className="naviLeft">
                <Dropdown menu={{ items: shopItems }}>
                    <a onClick={e => e.preventDefault()}>
                        <Space>
                            Shop
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
                <Link to='/about'>About Us</Link>
            </div>
            <div className="naviCenter">
                <div><Link to='/'></Link></div>
            </div>
            <div className="naviRight">

                <Dropdown menu={{ items: searchItems }} trigger={['click']}>
                    <a onClick={e => e.preventDefault()}>
                        <Space>
                            <a href=""><img src="../../img/search.svg" alt="search" /></a>
                        </Space>
                    </a>
                </Dropdown>
                <div><Link to='/cart'><img src="../../img/cart.svg" alt="cart" /></Link></div>
                <div><Link to='/login'><img src="../../img/login.svg" alt="login" /></Link></div>
            </div>
        </div>
    )
}
