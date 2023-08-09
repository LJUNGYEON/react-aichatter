import { configureStore , createSlice} from "@reduxjs/toolkit";

let content = createSlice({
    name:'content',
    initialState:{content : ''}
    ,
      reducers:{
        chgContent(state, action){
            console.log(state);
            state.content = action.payload;
        }
      }

})

export let { chgContent} = content.actions

export default content;