import React, { memo } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addCount, increaseGrade } from '../store';

let Review = memo(function(){
	return(
		<div>
			<h3>Recommended by Review</h3>
			<p>구매 고객님들의 리뷰로 인증된 키워드별 만족도가 높은 상품</p>
		</div>
	);
})

function Cart(){
	let userData=useSelector((state)=>{ return state });
	console.log(userData.cart); //initialState만 불러옴!!
	let dispatch=useDispatch();
	return(
		<>
			<h2 onClick={()=>{ dispatch(increaseGrade(1)); }}>{userData.member.name}({userData.member.grade}) 장바구니</h2>
			<Table>
				<thead>
					<tr>
						<th>id</th>
						<th>상품명</th>
						<th>수량</th>
						<th>수량변경버튼</th>
					</tr>
				</thead>
				<tbody>
					{
						userData.cart.map((data,idx)=>(
							<tr key={idx}>
								<td>{data.id}</td>
								<td>{data.name}</td>
								<td>{data.count}</td>
								<td><button onClick={()=>{ dispatch(addCount(data.id)); }}>+</button></td>
							</tr>
						))
					}
				</tbody>
			</Table>
			<Review />
		</>
	);
}

export default Cart;