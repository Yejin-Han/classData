import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

function Update(){
	const [boards, setBoards] = useState([]);
	useEffect(() => {
		const fetchBoards = async() => {
			try{
				const res = await axios.get('http://localhost:8080/board');
				setBoards(res.data);
			} catch(err) {
				console.log(err);
			}
		}
		fetchBoards();
	}, []);
	const navigate = useNavigate();
	const location = useLocation();
	const boardId = location.pathname.split("/")[2];
	let [list, setList] = useState({
		title: '',
		author: '',
		date: ''
	});

	const handleChange = (e) => {
		setList(prev => ({...prev, [e.target.name]: e.target.value}));
	}

	const updateComplete = async(e) => {
		e.preventDefault();
		try{
			await axios.put(`http://localhost:8080/board/${boardId}`, list);
			navigate("/");
		} catch(err){
			console.log(err);
		}
	}

	const handleDelete = async(e) => {
		e.preventDefault();
		try{
			await axios.delete(`http://localhost:8080/board/${boardId}`);
			navigate("/");
		} catch(err){
			console.log(err);
		}
	}

	return(
		<div>
			<h2>Update Board</h2>
			<Form>
				<Form.Group className="mb-3" controlId="title" name="title">
					<Form.Label>제목</Form.Label>
					<Form.Control type="text" name="title" placeholder="제목을 입력하세요." onChange={handleChange} />
				</Form.Group>
				<Form.Group controlId="author" name="author">
					<Form.Label>작성자</Form.Label>
					<Form.Control type="text" name="author" placeholder="작성자" onChange={handleChange} />
				</Form.Group>
				<Form.Group controlId="date" name="date">
					<Form.Label>작성일</Form.Label>
					<Form.Control type="date" name="date" onChange={handleChange} />
				</Form.Group>
				<Button variant="primary" type="submit" onClick={updateComplete}>수정 완료</Button>
				<Button variant="secondary" onClick={handleDelete}>글 삭제</Button>
			</Form>
		</div>
	);
}

export default Update;