import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {useState} from 'react';
import data from './data';

function Colmd(props){
	return(
		<Col md={3}>
			<img src={props.contents.src} alt="" />
			<h4>{props.contents.brand}</h4>
			<p>{props.contents.title}</p>
			<p>{props.contents.price}</p>
		</Col>
	);
}

function Main(){
	let [newPdt]=useState(data);
	return(
		<>
			<div className="main-visual">
				<img src="images/1672995210793.jpg" alt="" />
			</div>
			<Container className="new_item_wrap">
				<h2>신상품</h2>
				<Row className="new_item_list">
					{
						newPdt.map((dv,idx)=>{
							return(
								<Colmd contents={dv} key={idx} />
							)
						})
					}
				</Row>
			</Container>
		</>
	);
}
export default Main;