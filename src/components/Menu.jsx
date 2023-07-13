import styled from "styled-components";
import { useState , useRef } from 'react';
import data from '../test/data'
import '../css/side.css';

import {Button,Container, Row, Col,  Form, Badge, ListGroup} from 'react-bootstrap';

import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas ,far)

const Menu = ({ isActive }) => {
   let [chatList,setChatList]=useState(data);
   let [updateFlag, setUpdateFlag]= useState([
    chatList.map((a,i)=>{
        return(false);
    })
   ]);

  return (
    <>

     <ListGroup as="ol"  className={isActive ? "in" : null}>
          <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" >
            <div className=" w-100 ">
                <Container>
                    <Row>
                        <Col xs={2}>
                            <div className="fw-bold text-start">
                               <input name="chkAll" className="custom-control-input " type="checkbox" value="chkAll" />

                               </div>
                        </Col>
                        <Col className="fw-bold text-start">
                         채팅 목록
                        </Col>
                        <Col>
                             <Badge bg="primary" pill>
                                 <FontAwesomeIcon icon="fa-solid fa-plus" />
                            </Badge>
                        </Col>
                    </Row>
                </Container>


            </div>

          </ListGroup.Item>

           {
              chatList.map(function(a,i){
                  return (
                      <ChatList index={i} chatList={chatList} setChatList={setChatList} updateFlag={updateFlag} setUpdateFlag={setUpdateFlag}/>
                  )
              })
          }
     </ListGroup>
    </>
  );
};

function ChatList(props){
    let [inputVal, setInputVal] = useState(props.chatList[props.index].title);

    return(
       <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" >
           <div className="ms-2 me-auto w-100 " >
                 {
                  props.updateFlag[props.index] == true?
       			<>

                <div className="fw-bold text-start"> <FontAwesomeIcon icon="fa-regular fa-message"/>7일전</div>
                  <div className="fw-bold text-center">
                       <input className="chat-title-input text-center" type="text" id={"cTitle"+props.chatList[props.index].id} defaultValue={inputVal}
                         onChange={(e)=>{
                            setInputVal(e.target.value);
                        }} />
                        <UpdateAfterBtn inputVal={inputVal} index={props.index} updateFlag={props.updateFlag} setUpdateFlag={props.setUpdateFlag}  chatList={props.chatList} setChatList={props.setChatList}/>
       		        </div>
       			</>
                   :
       			<>
       			 <div className="fw-bold text-start"> <FontAwesomeIcon icon="fa-regular fa-message"/>7일전</div>
                    <div className="fw-bold text-center">
                        <span className="text-center"> {props.chatList[props.index].title}</span>
                        <UpdateBeforeBtn index={props.index} updateFlag={props.updateFlag} setUpdateFlag={props.setUpdateFlag} chatList={props.chatList} setChatList={props.setChatList}/>
                    </div>
       			</>
                 }

       		</div>
      </ListGroup.Item>
    )
}

function UpdateBeforeBtn(props){
return(
<>
     <Badge bg="primary" pill onClick={()=>{
               let updateFlagTmp = [...props.updateFlag];
               updateFlagTmp[props.index] = true;
               props.setUpdateFlag(updateFlagTmp);
             }} >
             <FontAwesomeIcon icon="fa-solid fa-pen" />
     	</Badge>
     	 <Badge bg="primary" pill pill onClick={()=>{
                  let updateFlagTmpDelete = [...props.updateFlag];
                  updateFlagTmpDelete.splice(props.index, 1);
                  props.setUpdateFlag(updateFlagTmpDelete);

                  let chatListTmpDelete = [...props.chatList];
                  chatListTmpDelete.splice(props.index, 1);
                  props.setChatList(chatListTmpDelete);
               }}>
     		 <FontAwesomeIcon icon="fa-solid fa-trash-can" />
     	</Badge>
</>
)
}

function UpdateAfterBtn(props){

return(
<>
      <Badge bg="primary" pill onClick={()=>{
           let updateFlagTmp = [...props.updateFlag];
           updateFlagTmp[props.index] = false;
           props.setUpdateFlag(updateFlagTmp);

           let chatListTmp = [...props.chatList];
           console.log(props.inputVal);
           chatListTmp[props.index].title = props.inputVal;
           props.setChatList(chatListTmp);
        }}>
         <FontAwesomeIcon icon="fa-solid fa-check" />
      </Badge>
      <Badge bg="primary" pill onClick={()=>{
             let updateFlagTmpDelete = [...props.updateFlag];
             updateFlagTmpDelete.splice(props.index, 1);
             props.setUpdateFlag(updateFlagTmpDelete);

             let chatListTmpDelete = [...props.chatList];
             chatListTmpDelete.splice(props.index, 1);
             props.setChatList(chatListTmpDelete);
          }}>
        <FontAwesomeIcon icon="fa-solid fa-trash-can" />
      </Badge>
</>
)
}
export default Menu;
