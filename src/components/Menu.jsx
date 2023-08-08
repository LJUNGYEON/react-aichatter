import styled from "styled-components";
import { useEffect, useState , useRef } from 'react';
import data from '../test/data'
import '../css/side.css';
                                     
import { useDispatch, useSelector } from 'react-redux';
import {changeFlagAll} from '../store/store.js'

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

  

   let checkAll = useSelector((state)=> { return state.checkChatListFlagAll})
   let dispatch = useDispatch();


   let [chkList,setChkList]=useState(new Set());
   const [bChecked, setChecked] = useState(false);

   const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
        chkList.add(Number(id));
        setChkList(chkList);
    } else if (!isChecked && chkList.has(Number(id))) {
        chkList.delete(Number(id));
        setChkList(chkList);
    }
   
    if(chkList.size == chatList.length) {
        setIsAllChecked(true);
        setChecked(true);
    }
    else if(chkList.size != chatList.length && chkList.size == 0){
        setIsAllChecked(false);
        setChecked(false);
    }
    else if( chkList.size != chatList.length && chkList.size > 0){
        setIsAllChecked(false);
        setChecked(true);
    }
  };
   
    const checkHandler = ({ target }) => {
   
    checkedItemHandler(target.id, target.checked);
    };

    const [isAllChecked, setIsAllChecked] = useState(false);

const allCheckedHandler = (isChecked) => {
    
  if (!isAllChecked) {
    setChkList(new Set(chatList.map(({ id }) => id)));
    setIsAllChecked(true);
    setChecked(true);
  } else {
   // chkList.clear();
    chkList.clear();
    setChkList(new Set());
    setIsAllChecked(false);
    setChecked(false);
  }
};

const allCheckHandler = () => setChecked(isAllChecked);

useEffect(() => allCheckHandler(), [isAllChecked]);
  return (
    <>

     <ListGroup as="ol"  className={isActive ? "in" : null}>
          <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" >
            <div className=" w-100 ">
                <Container>
                    <Row>
                        <Col xs={2}>
                            <div className="fw-bold text-start">
                                <label>
                                <input name="chkAll" className="custom-control-input"
                                    onChange={(e)=>{ allCheckedHandler(isAllChecked) } }
                                    type="checkbox" value="{chackAll}" checked={ isAllChecked ===true ? 'checked':''} />

                                </label>
                            </div>
                        </Col>
                        <Col className="fw-bold text-start">
                         채팅 목록
                        </Col>
                        <Col>
                        { 
                                isAllChecked === true ? 
                                <>
                                 <Badge bg="primary" pill>
                                    <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                                </Badge>
                                </>
                                :
                                <>
                                    <Badge bg="primary" pill>
                                        <FontAwesomeIcon icon="fa-solid fa-plus" />
                                    </Badge>
                                </>
                            }
                            
                        </Col>
                    </Row>
                </Container>


            </div>

          </ListGroup.Item>

           {
              chatList.map(function(a,i){
                  return (
                      <ChatList key={i} checkHandler={checkHandler} chkList={chkList} isAllChecked={isAllChecked} bChecked={bChecked} index={i} chatList={chatList} setChatList={setChatList} updateFlag={updateFlag} setUpdateFlag={setUpdateFlag}/>
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

                <div className="fw-bold text-start">7일전</div>
                    <div className="fw-bold text-center">
                    { 
                       props.chkList.size > 0 ? 
                        <>
                        <label style={{float: "left"}}>
                            <input name="chkList" className="custom-control-input" 
                               onChange={(e) => props.checkHandler(e)}
                               checked={props.chkList.has(Number(props.index)) === true ? 'checked':''} 
                                type="checkbox" id={props.index}  />
                        </label>
                        </>
                        :
                        <>
                            <span className="float-start "><FontAwesomeIcon icon="fa-regular fa-message"/></span>
                        </>
                    }
                        <input className="chat-title-input text-center" type="text" id={"cTitle"+props.chatList[props.index].id} defaultValue={inputVal}
                            onChange={(e)=>{
                                setInputVal(e.target.value);
                            }} />
                        <span className="float-end" >
                            <UpdateAfterBtn  inputVal={inputVal} index={props.index} updateFlag={props.updateFlag} setUpdateFlag={props.setUpdateFlag}  chatList={props.chatList} setChatList={props.setChatList}/>
                        </span>
    		        </div>
       			</>
                   :
       			<>
       			 <div className="fw-bold text-start"> 7일전</div>
                    <div className="fw-bold text-center">
                    { 
                         props.chkList.size > 0 ? 
                        <>
                        <label className="float-start " style={{float: "left"}}>
                            <input name="chkList" className="custom-control-input " id={props.index}
                                onChange={(e) => props.checkHandler(e)}
                                checked={props.chkList.has(Number(props.index)) ===true ? 'checked':''}
                                type="checkbox"  />

                        </label>
                        </>
                        :
                        <>
                            <span className="float-start "><FontAwesomeIcon icon="fa-regular fa-message"/></span>
                        </>
                    }
                        <span className="text-center"> {props.chatList[props.index].title}</span>
                        <span className="float-end"><UpdateBeforeBtn  index={props.index} updateFlag={props.updateFlag} setUpdateFlag={props.setUpdateFlag} chatList={props.chatList} setChatList={props.setChatList}/></span>
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

function UpdateAfterBtn(props){

return(
<>
      <Badge bg="primary" pill onClick={()=>{
           let updateFlagTmp = [...props.updateFlag];
           updateFlagTmp[props.index] = false;
           props.setUpdateFlag(updateFlagTmp);

           let chatListTmp = [...props.chatList];
        
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
