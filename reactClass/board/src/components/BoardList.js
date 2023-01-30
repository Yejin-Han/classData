import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from "react-bootstrap";

function BoardList(){
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
					<tr>
						<td>1</td>
						<td>제목1</td>
						<td>한예진</td>
						<td>2023-01-29</td>
					</tr>
					<tr>
						<td>2</td>
						<td>제목2</td>
						<td>김민석</td>
						<td>2023-01-30</td>
					</tr>
					<tr>
						<td>3</td>
						<td>제목3</td>
						<td>손승완</td>
						<td>2023-01-31</td>
					</tr>
				</tbody>
			</Table>
			<Button variant="info">글쓰기</Button>
			<Button variant="secondary">수정하기</Button>
			<Button variant="danger">삭제하기</Button>
		</div>
	);
}

export default BoardList;