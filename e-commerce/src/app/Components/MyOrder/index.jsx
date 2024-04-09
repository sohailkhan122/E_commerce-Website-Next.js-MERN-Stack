"use client"
import React, { useState, useEffect } from "react";
import "./index.css";
import { Button } from "antd";
import {
  HeartOutlined,
  IdcardOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import OrdersOwn from "./OrdersOwn";
import EmptyWishlist from "./EmptyWishlist";
import OrderDetalis from "./OrderDetalis";
import MyInFo from "./MyInFo";
import { useRouter } from "next/navigation";

const MyOrder = () => {
  const [value, setValue] = useState('myInfo');
  const router = useRouter();

  const handleLogOutClick = () => {
    if (typeof window !== 'undefined') {
      localStorage.clear();
      router.push('/login');
    }
  };


  const handleButtonClick = (val) => {
    setValue(val);
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="mainSidebarContainer">
        <div className="sidebarContainer">
          <div className="sidebarContent">
            <img src="/Images/New Arrival Logo.png" alt="logo" />
            <span>Hello Sohail</span>
          </div>
          <p>Welcome to your Account</p>
          <div className="sidebarButton">
            <Button
              icon={<IdcardOutlined />}
              onClick={() => handleButtonClick('Myorders')}
              style={{ background: value === 'Myorders' ? '#8A33FD' : 'inherit', color: value === 'Myorders' ? 'white' : 'inherit' }}
            >
              My orders
            </Button>
            <Button
              icon={<IdcardOutlined />}
              onClick={() => handleButtonClick('OrdersDetails')}
              style={{ background: value === 'OrdersDetails' ? '#8A33FD' : 'inherit', color: value === 'OrdersDetails' ? 'white' : 'inherit' }}
            >
              Orders Details
            </Button>
            <Button
              icon={<HeartOutlined />}
              onClick={() => handleButtonClick('Wishlist')}
              style={{ background: value === 'Wishlist' ? '#8A33FD' : 'inherit', color: value === 'Wishlist' ? 'white' : 'inherit' }}
            >
              Wishlist
            </Button>
            <Button
              icon={<UserOutlined />}
              onClick={() => handleButtonClick('myInfo')}
              style={{ background: value === 'myInfo' ? '#8A33FD' : 'inherit', color: value === 'myInfo' ? 'white' : 'inherit' }}
            >
              My info
            </Button>
            <Button icon={<LogoutOutlined />} onClick={handleLogOutClick}>Sign out</Button>
          </div>
        </div>
      </div>
      <div className="mainContentContainer">
        {
          value === 'myInfo' && (<MyInFo />)
        }
        {
          value === 'Wishlist' && (<EmptyWishlist />)
        }
        {
          value === 'Myorders' && (<OrdersOwn setValue={setValue} />)
        }
        {
          value === 'OrdersDetails' && (<OrderDetalis setValue={setValue} />)
        }
        {/* <Wishlist /> */}
      </div>
    </div>
  );
};

export default MyOrder;


