import { configureStore , createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name:'user',
    initialState:'kim',
    reducers:{
        changeName(state){{/* 기존 state*/}
            return  'john kim'
        }
    }

})
let {changeName} = user.actions

let checkChatListFlagAll = createSlice({
    name:'checkChatListFlagAll',
    initialState: false,

    reducers:{
        changeFlagAll(state){
            return  !state
        }
    }
})

export let {changeFlagAll} = checkChatListFlagAll.actions



let chkList = createSlice({
    name:'chkList',
    initialState: [{
        count : "0",
        listChk:[]
    }],

    reducers:{
        incCnt(state){
            return  state.count++
        },

        decCnt(state){
            return   state.count--
        },
        addList(state){
            
            state.listChk.push()
        }

    }
})

export let {incCnt, decCnt} = chkList.actions


export default configureStore({

    reducer:{
        user: user.reducer,
        checkChatListFlagAll : checkChatListFlagAll.reducer

    }
})