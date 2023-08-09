import React, {useEffect, useState} from 'react';
import { Routes, Route, Link , useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {chgContent} from '../store/content.js'
import bg from '../img/aiChatter2.png';
import {Button, Container,  Row, Col, Card, Form, InputGroup, Stack } from 'react-bootstrap';
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

  let r_a = useSelector((state)=>{
    return state; 
  })
console.log(r_a);
  let dispatch = useDispatch();

  const movePage = useNavigate();

  function goMain(){
     movePage('/js/main_chat');
   }

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
                     <Col xs={1}><div className="vr" /></Col> 
                    <Col>
                        <Row>
                            <Col>대화 스타일</Col>
                            <Col>
                                <Container>
                                     <Row>
                                        <Col sm> <Button variant="secondary">창의</Button>{' '}</Col>
                                        <Col sm> <Button variant="secondary">균형</Button>{' '}</Col>
                                        <Col sm> <Button variant="secondary">정보</Button>{' '}</Col>
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
                 <Row>
                  <Container style={{width: "70%"}}>
                    <Row>
                      <Col xs={1} className="mb-3 mt-5">
                        <Button variant="outline-info"><FontAwesomeIcon icon="fa-solid fa-plus" /></Button>{' '}
                      </Col>
                      <Col className="mb-3 mt-5">
                        <InputGroup>
                          <InputGroup.Text id="inputGroup-sizing-default">
                            <FontAwesomeIcon icon="fa-regular fa-message"/>
                          </InputGroup.Text>
                          <Form.Control
                            placeholder="Ai Chatter에게 무엇이든 질문하세요!"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e)=> {
                              dispatch(chgContent(e.target.value))
                            }}
                          />
                          <Button variant="outline-secondary" id="button-addon2" onClick={goMain} >
                            <FontAwesomeIcon icon="fa-solid fa-play" style={{color:"#13b6bc"}}/>
                          </Button>
                        </InputGroup>
                      </Col>
                      <Col xs={1} className="mb-3 mt-5">
                        <Button variant="outline-info"><FontAwesomeIcon icon="fa-solid fa-table-cells-large" /></Button>{' '}
                      </Col>

                    </Row>
                     
                  </Container>
                 </Row>
                </Col>
            </Row>
            <Row className="mb-1 mt-1">
                <Col>
                <Stack direction="horizontal" gap={3} style={{color:"#C6C2C1"}}>
                  <div className="p-2 ms-auto"><FontAwesomeIcon icon="fa-solid fa-circle-info" /></div>
                  <div className="p-2">Ai Chatter는 ai를 통해 제공됨에 따라 예상치 못한 결과나 부정확한 정보가 제공될 수 있습니다.</div>
                  <div className="p-2 ms-auto">개인정보보호</div>
                  <div className="vr" />
                  <div className="p-2">사용약관</div>
                </Stack>
                </Col>
            </Row>
         </Container>
    )
}

export default Body;

