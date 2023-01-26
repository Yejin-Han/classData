import React from 'react';
import {Outlet} from 'react-router-dom';

function Company(){
	return(
		<div>
			<h1>회사 소개</h1>
			<p>우리는 브랜드를 통해<br/>고객의 삶을 향상시킵니다.</p>
			<Outlet></Outlet>
		</div>
	);
}

export default Company;