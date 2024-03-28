"use client"
import React, { useState, useEffect, useContext } from "react";
import "./header.css";
import { Badge, Button } from "antd";
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import axios from "axios";
import noteContext from "@/context/noteContext";


const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [productsLength, setProductsLength] = useState(0);
  const { refresh } = useContext(noteContext)

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem('userData'));
    if (!userId) {
      router.push('/login');
    } else {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/cart/getCartItem/${userId._id}`);
          setProductsLength(response.data.cartItem.products.length);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }
  }, [refresh]);

  const handleCartClick = () => {
    router.push('/CartPage');
  };

  return (
    <div className="headerMainContainer">
      <div className="headerContent">
        <div>
          <img
            style={{ width: "91.16px", height: "45px", objectFit: 'cover' }}
            src="/Images/Logo.png"
            alt="Picture of the Logo"
          />
        </div>
        <div className="headerButton">
          <span className={pathname === '/' ? 'boldText' : ''} onClick={() => router.push('/')}>Shop</span>
          <span className={pathname === '/ProductList/men' ? 'boldText' : ''} onClick={() => router.push(`/ProductList/${'men'}`)}>Men</span>
          <span className={pathname === '/ProductList/women' ? 'boldText' : ''} onClick={() => router.push(`/ProductList/${'women'}`)}>Women</span>
          <span className={pathname === '/ProductList/joggers' ? 'boldText' : ''} onClick={() => router.push(`/ProductList/${'joggers'}`)}>Joggers</span>
        </div>
        <div>
          <Button
            style={{ paddingRight: "240px", height: "44px" }}
            icon={<SearchOutlined />}
          >
            Search
          </Button>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <Button
            style={{ width: "44px", height: "44px" }}
            icon={<HeartOutlined />}
          />
          <Button className={pathname === '/MyOrder' ? 'background' : ''} onClick={() => router.push('/MyOrder')}
            style={{ width: "44px", height: "44px" }}
            icon={<UserOutlined />}
          />
          <Badge count={productsLength} offset={[4, 5]}>
            <Button className={pathname === '/CartPage' ? 'background' : ''} onClick={handleCartClick}
              style={{ width: "44px", height: "44px" }}
              icon={<ShoppingCartOutlined />}
            />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Header;
