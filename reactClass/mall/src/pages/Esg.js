import React, { useDeferredValue, useState, useTransition } from 'react';

let Ar=new Array(10000).fill('');

function Esg(){
	let [name, setName]=useState('');
	let [ispending, startTransition]=useTransition();
	let stateName=useDeferredValue(name);
	return(
		<div>
			<h3>ESG</h3>
			<p>LF는 ESG 경영을 최우선으로 지속<br/>가능한 기업 경쟁력을 강화하겠습니다.</p>
			<input type='text' onChange={(e)=>{
				startTransition(()=>{
					setName(e.target.value);
				});
			}} />
			{
				ispending ? '데이터 처리 중':
				Ar.map((data,idx)=>{
					return <div key={idx}>{stateName}</div>;
				})
			}
		</div>
	);
}

export default Esg;