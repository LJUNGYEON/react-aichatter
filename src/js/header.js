import React, {useEffect, useState} from 'react';
import '../css/header.css';
import axios from 'axios';
import $ from 'jquery';
import DropdownMenu from '../jsx/DropdownMenu';
import DropdownLan from '../jsx/DropdownLan';

import styled, { css } from "styled-components";
import Bar from '../components/Bars';

import logo from '../img/logo.png';
import member from '../img/member.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas ,far)


const Close = styled.button`
  position: relative;
  top: 0;
  right: 0;
  background-color: #13b6bc;
  border: 0;
  padding: 22px;
  z-index: 10;
  cursor: pointer;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #472662;
`;





function Header(props) {
   const [hello, setHello] = useState('')
   const [view, setView] = useState(false);

     const handleClick = () => {
       console.log("active!");
      props.setActive(!props.isActive);
     };

    return (
        <>
        <div className="header_nav">
            <div className="navbar-header">
                <a className="navbar-brand navbar-brand-center" href="#">
                    <img className="navbar-brand-logo" src={logo} alt="mcloudoc" />
               </a>
            </div>
             <Close onClick={handleClick}>
              <Bar isActive={props.isActive} />
            </Close>
            <div className="nav navbar-left">
                <ul className="navbar-nav">
                   <li className="">
                       <a href="#1">채팅</a>
                   </li>
                   <li className="">
                      <a href="#2">번역</a>
                   </li>
                    <li className="">
                      <a href="#3">문서봇</a>
                    </li>
                    <li className="">
                      <a href="#4">자동화봇</a>
                    </li>
                </ul>
            </div>
            <div className="nav navbar-right " >
                <ul className="navbar-nav" >
                    <li>
                         <FontAwesomeIcon icon="fa-regular fa-bell" size="xl" />
                    </li>
                    <li>
                        <FontAwesomeIcon icon="fa-regular fa-circle-user" size="xl" style={{color: "gray"}} /><span>이름</span>
                    </li>
                    <li><DropdownLan /></li>
                    <li ><DropdownMenu /></li>
                </ul>
            </div>

         </div>
        </>
    );
}

export default Header;

