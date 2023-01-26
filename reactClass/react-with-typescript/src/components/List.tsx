import React from 'react';
import { IState as IProps } from '../App';

const List = ({people} : IProps) => { /* List: React.FC<IProps> = ({people}) => */
  const renderList = (): JSX.Element[] => {
    return people.map((person)=>{
      return(
        <li className="List">
          <div className="List-header">
            <img className="List-img" src={person.url} alt={person.name} />
            <h2>{person.name}</h2>
          </div>
          <p>만 {person.age}세</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    }); /* 첫 return에서 map함수라는 JSX.Element를 return하고, 다음 return에서 map함수의 결과를 return한다고 생각 */
  }
  return(
    <ul>
      {renderList()}
    </ul>
  );
}

export default List;