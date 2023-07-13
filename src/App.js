import {useEffect, useState} from "react";

import React from "react";
import { useMediaQuery } from "react-responsive";

import Header from './js/header';
import './App.css';
import styled, { css } from "styled-components";
import Body from './js/body';
import Menu from './components/Menu';
import {Button,Navbar,Container, Nav, Row, Col, Card, Form} from 'react-bootstrap';
const Container2 = styled.div`
  width: 100%;
  height: 100%;

`;
const Outside = styled.div`
  display: inline-block;
  float: left;
  width: 25vw;
  min-width: 100%;
  max-width: 100%;
  height: 100vh;
  transform: translateX(-101%);
  transition: all 0.5s cubic-bezier(0, 0.05, 0, 1.3);
  overflow: hidden;

  &.in {
    transform: translateX(0);
    transition: 0;
  }

  > div {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    display: block;
    width: 100%;
    height: 100%;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0 100% 100% 0;
    transition: all 0.25s cubic-bezier(1, 0.05, 1, 1.5);
    transition-delay: 0.5s;
    background-color: whitesmoke;
  }

  &.in > div {
    border-radius: 0;
    transition-delay: 0s;
  }

  /* material animation*/
  > div:before {
    content: "";
    width: 2100px;
    height: 2100px;
    display: block;
    background-color: white;
    position: absolute;
    top: -50%;
    left: -100%;
    z-index: -1;
    transition: all 0.75s linear;
    transition-delay: 0.15s;
    transform: scale(0);
    transform-origin: top right;
    border-radius: 1000px;
  }
  &.in > div:before {
    transform: scale(1);
  }
`;

function App() {

   const [isActive, setActive] = useState(true);
    const isDesktop: boolean = useMediaQuery({
        query: "(min-width:1024px)",
      });
      const isTablet: boolean = useMediaQuery({
        query: "(min-width:768px) and (max-width:1023px)",
      });
      const isMobile: boolean = useMediaQuery({
        query: "(max-width:767px)",
      });

    useEffect(()=>{
     isMobile === true?setActive(false):setActive(true)
    },[isMobile])


   return (

    <div className="App">
      <div className="header_div">
        <Header isActive={isActive} setActive={setActive} />
      </div>
       <div className="body_div">
       <Container className="body_container">
          <Row>
            <Col xs={isDesktop === true?2:4} md={ isDesktop === true?2:4} className={isActive ? null : "display-none" }>
               <Outside className={isActive ? "in" : null}>
                <div className="inside">
                  <Menu isActive={isActive} />
                </div>
              </Outside>
            </Col>
            <Col>
             <Container2><Body/></Container2>
           </Col>
           </Row>
        </Container>
       </div>
    </div>
  );
}

export default App;
