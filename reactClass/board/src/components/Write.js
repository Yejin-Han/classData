import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Write(){
	const navigate = useNavigate();
	let [list, setList] = useState({
		title: '',
		mainTextArea: '',
		author: '',
		date: ''
	});

	const handleChange = (e) => {
		setList(prev => ({...prev, [e.target.name]: e.target.value}));
	}

	const writeComplete = async(e) => {
		e.preventDefault();
		try{
			await axios.post("http://localhost:8080/board", list); /* webboard */
			navigate("/");
		} catch(err){
			console.log(err);
		}
	}

	return(
		<div>
			<Form>
				<Form.Group className="mb-3" controlId="title" name="title">
					<Form.Label>제목</Form.Label>
					<Form.Control type="text" placeholder="제목을 입력하세요." onChange={handleChange} /> {/* onChange={(e)=>{setList(list.title=e.target.value)}} */}
				</Form.Group>
				<Form.Group className="mb-3" controlId="mainTextArea" name="mainTextArea">
					<Form.Label>내용</Form.Label>
					<Form.Control as="textarea" rows={3} onChange={handleChange} />
				</Form.Group>
				<Form.Group controlId="author" name="author">
					<Form.Label>작성자</Form.Label>
					<Form.Control type="text" placeholder="작성자" onChange={handleChange} />
				</Form.Group>
				<Form.Group controlId="date" name="date">
					<Form.Label>작성일</Form.Label>
					<Form.Control type="date" onChange={handleChange} />
				</Form.Group>
				<Button variant="primary" type="submit" onClick={writeComplete}>작성 완료</Button>
				<Button variant="secondary" type="reset" onClick={()=>{navigate('/')}}>취소</Button>
			</Form>
		</div>
	);
}

export default Write;