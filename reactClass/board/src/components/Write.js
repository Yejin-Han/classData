import { Form, Button } from "react-bootstrap";

function Write(){
	return(
		<div>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicTitle">
					<Form.Label>제목</Form.Label>
					<Form.Control type="text" placeholder="제목을 입력하세요." />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicTextArea">
					<Form.Label>내용</Form.Label>
					<Form.Control as="textarea" rows={3} />
				</Form.Group>
				<Button variant="primary" type="submit">작성 완료</Button>
				<Button variant="secondary" type="reset">취소</Button>
			</Form>
		</div>
	);
}

export default Write;