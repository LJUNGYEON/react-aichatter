import React, {useEffect, useState} from 'react';
import { Routes, Route, Link ,useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {chgContent} from '../store/content.js'
import bg from '../img/aiChatter2.png';
import {Button, Container,  Row, Col, Card, Form, InputGroup, Stack , ListGroup} from 'react-bootstrap';
import '../css/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas ,far)

const divStyle = {
    backgroundColor: "#e7e7e7"
  };

  const divStyle2 = {
    backgroundColor: "#F8F8FF"
  };

function MainChart(){


    let storeContent = useSelector((state)=>{
        return state.content; 
      })

      console.log(storeContent);
    const movePage = useNavigate();

    function goMain(){
       movePage('/js/main_chat');
     }

    return(
        <Container fluid   >
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
                <Container fluid  >
                  <Row className="main-select-R1 ">
                    <Col >
                        <FontAwesomeIcon className="float-start" icon="fa-solid fa-circle-user" />{storeContent.content}
                     </Col>
                     <Col>
                         <Button className="float-end" variant="outline-info"><FontAwesomeIcon icon="fa-regular fa-pen-to-square" /></Button>{' '}
                     </Col>
                  </Row>
                </Container>
            </Col>
          </Row>

          <Row style={divStyle2}>
            <Col>
                <Container fluid  >
                  <Row className="main-select-R1 ">
                    <Col >
                        <FontAwesomeIcon className="float-start" icon="fa-solid fa-circle-user" />{storeContent.content}
                     </Col>
                  </Row>
                </Container>
            </Col>
          </Row>

          <Row>
            <Col>
                <Container fluid  >
                    <Row className="main-select-R1 ">
                        <Col >
                            <FontAwesomeIcon className="float-start" icon="fa-solid fa-circle-user" />{storeContent.content}
                        </Col>
                        <Col>
                            <Button className="float-end" variant="outline-info"><FontAwesomeIcon icon="fa-regular fa-pen-to-square" /></Button>{' '}
                        </Col>
                    </Row>
                    <Row className="main-select-R1 ">
                        <Col>
                            <ListGroup className="float-end">
                                <ListGroup.Item variant="light">아이독의 기능은 무엇인가요</ListGroup.Item>
                                <ListGroup.Item variant="light">다른 인공지능 지식관리 솔루션도 알고 싶어요</ListGroup.Item>
                                <ListGroup.Item variant="light">아이독과 함께 쓸 수 있는 제품은 무엇인가요
                                
                                </ListGroup.Item>
                            </ListGroup>
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


export default MainChart;