import { configureStore, createSlice } from '@reduxjs/toolkit';

let member=createSlice({
	name: 'member',
	initialState: {name: 'yejin', grade: 3},
	reducers: {
		increaseGrade(state, action){
			state.grade+=action.payload;
		}
	}
})
let cart=createSlice({
	name: 'cart',
	initialState: [
		{id: 11, name: '[LF몰 단독] 핑크 로고자수 가디건', count: 1},
		{id: 8, name: 'DC_22FW 울캐시미어 블렌디드 클래식 코트', count: 2}
	],
	reducers: {
		//state 변경함수 addCount
		addCount(state, action){ // onClick=dispatch(addCount(userData.cart[idx].id))
			let idIndex=state.findIndex(data=>{ return data.id===action.payload });
			state[idIndex].count+=1;
		},
		/* 
		배열 아니라서 id 추적 상관없이 addCount(state, action){ // onClick=dispatch(addCount(idx))
			state[action.playload].count++;
		} */
		addItem(state, action){
			state.push(action.payload);
		}
	}
})
export let {increaseGrade}=member.actions;
export let {addCount, addItem}=cart.actions;
export default configureStore({
	reducer: {
		member: member.reducer,
		cart: cart.reducer
	}
});