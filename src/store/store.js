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
export default configureStore({

    reducer:{

    }
})