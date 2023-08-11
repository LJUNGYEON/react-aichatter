import { configureStore , createSlice} from "@reduxjs/toolkit";

let answer = createSlice({
    name:'answer',
    initialState:{
        answer : '한국의 인공지능 지식관리 솔루션으로는 엠클라우독에서 개발한 \'아이독(aidoc)\'이 있습니다. \'아이독\’은 문서중앙화 업계 최초로 개발한 머신러닝 기반의 인공지능 지식관리 솔루션으로, 중앙화된 문서 및 사내 전문인력을 자동으로 분류하고 적시에 사용자에게 추천한다고 합니다.',
        relateUrl :["naver","google","aichatter"]
    }
    ,
      reducers:{
        chgAnswer(state, action){
            console.log(state);
            state.answer = action.payload;
        }
      }

})

export let { chgAnswer} = answer.actions

export default answer;