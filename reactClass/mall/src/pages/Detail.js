import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../store';

function Detail(props){
	let {id}=useParams();
	let dispatch=useDispatch();
	let navigate=useNavigate();
	let selectPdt=props.newPdt[id];
	useEffect(()=>{
		let addList=localStorage.getItem('Recently'); //App에서 Recently를 배열로 set해줬다고 가정
		addList=JSON.parse(addList); //object/array로 바꿔줌
		addList.push(selectPdt.title);
		addList=new Set(addList); //중복이 없는 배열로 처리(유사배열)
		addList=Array.from(addList); //배열로 만들어주기 or spread operator 활용
		localStorage.setItem('Recently', JSON.stringify(addList));
	}, []);
	return(
		<div>
			<Container>
				<img src={props.newPdt[id].src} alt="" />
				<h3>{props.newPdt[id].brand}</h3>
				<p>{props.newPdt[id].title}</p>
				<p>\ {props.newPdt[id].price}</p>
				<Button variant="primary" onClick={()=>{
					navigate('/cart');
					dispatch(addItem({ id: props.newPdt[id].id, name: props.newPdt[id].title, count: 1 }));
				}}>장바구니</Button>
				&nbsp;<Button variant="danger">주문하기</Button>
			</Container>
		</div>
	);
}

export default Detail;