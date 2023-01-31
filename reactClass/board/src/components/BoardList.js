import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from "react-bootstrap";

function BoardList(){
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

	return(
		<div>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>ID</th>
						<th>제목</th>
						<th>작성자</th>
						<th>작성일</th>
					</tr>
				</thead>
				<tbody>
					{
						boards.map((data, idx) => (
							<tr key={idx}>
								<td>{data.id}</td>
								<td>{data.title}</td>
								<td>{data.author}</td>
								<td>{data.date}</td>
							</tr>
						))
					}
				</tbody>
			</Table>
			<Button variant="info">글쓰기</Button>
			<Button variant="secondary">수정하기</Button>
			<Button variant="danger">삭제하기</Button>
		</div>
	);
}

export default BoardList;