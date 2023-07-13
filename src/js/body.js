import React, {useEffect, useState} from 'react';

import bg from '../img/aiChatter2.png';
import {Button,Navbar,Container, Nav, Row, Col, Card, Form} from 'react-bootstrap';
import '../css/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas ,far)

const divStyle = {
    backgroundColor: "#e7e7e7"
  };

function Body(){
    return(
        <Container fluid   >
           <Row>
             <Col>
                <div className="main-img">
                     <p style={{paddingTop:"20%"}}>나만의 어시스턴트 스마트한 경험</p>
                     <div  className="main-bg" style={{backgroundImage:'url('+bg+')'}}></div>
                   </div>
             </Col>
           </Row>
           <Row style={divStyle}>
            <Col>
                <Container fluid  >
                  <Row className="main-select-R1 ">
                    <Col>
                         <Container>
                               <Row>
                                 <Col>채팅 엔진</Col>
                                 <Col>
                                    <Form.Select aria-label="Default select">
                                       <option>Open this select menu</option>
                                       <option value="1">One</option>
                                       <option value="2">Two</option>
                                       <option value="3">Three</option>
                                    </Form.Select>
                                 </Col>
                               </Row>
                         </Container>
                     </Col>
                    <Col>
                        <Row>
                            <Col>대화 스타일</Col>
                            <Col>
                                <Container>
                                     <Row>
                                        <Col> <Button variant="secondary">창의</Button>{' '}</Col>
                                        <Col> <Button variant="secondary">균형</Button>{' '}</Col>
                                        <Col> <Button variant="secondary">정보</Button>{' '}</Col>
                                     </Row>
                                 </Container>
                            </Col>
                         </Row>
                    </Col>
                  </Row>
             </Container>
            </Col>
          </Row>
          <Row>
              <Col>
                <p className="mt-5"><FontAwesomeIcon icon="fa-regular fa-message"/> 이렇게 질문할 수 있어요!</p>
                <Container className="info-container">
                 <Row>
                   <Col xs={{ order: 'last' }}>
                        <Card className="main-card" >
                         <Card.Header style={{backgroundColor:"#13b6bc",color:"white"}}>생성형</Card.Header>
                         <Card.Body>
                           <blockquote className="blockquote mb-0">
                             <p>
                               {' '}
                               구매를 망설이는 고객들을 설득할만한 구매유도 문구를 작성해 주세요.
                                {' '}
                             </p>
                           </blockquote>
                         </Card.Body>
                       </Card>
                   </Col>
                   <Col xs>
                    <Card className="main-card" >
                        <Card.Header style={{backgroundColor:"#13b6bc",color:"white"}}>리서치형</Card.Header>
                        <Card.Body>
                          <blockquote className="blockquote mb-0">
                            <p>
                              {' '}
                              바쁜 고객들이 식료품을 쇼핑하는데 있어서 근본적인 니즈는 무엇인가요?
                              {' '}
                            </p>
                          </blockquote>
                        </Card.Body>
                      </Card>
                   </Col>
                   <Col xs={{ order: 'first' }}>
                    <Card className="main-card" >
                       <Card.Header style={{backgroundColor:"#13b6bc",color:"white"}}>검색형</Card.Header>
                       <Card.Body>
                         <blockquote className="blockquote mb-0">
                           <p>
                             {' '}
                              음성 인식 인터페이스의 우수사례들을 알려주세요.
                            {' '}
                           </p>
                         </blockquote>
                       </Card.Body>
                     </Card>
                   </Col>
                 </Row>
               </Container>
              </Col>
            </Row>
            <Row>
                <Col>
                 <p>나만의 어시스턴트 스마트한 경험</p>
                </Col>
            </Row>
         </Container>

    )
}

export default Body;

