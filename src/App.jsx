import React, { useState } from "react";
import "./App.css";
import Button from "components/button";
import User from "components/User";

// - UI 구현하기
// - Todo 추가 하기
// - Todo 삭제 하기
// - Todo 완료 상태 변경하기(완료 ↔ 진행중)

const App = () => {

  const [users, setUers] = useState([
    { id: 1, age: 28, name: "페이커" },
    { id: 2, age: 29, name: "이상혁" },
    { id: 3, age: 30, name: "T1" },
  ]);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  }

  // 추가 버튼 클릭
  const clickAddButtonHandler = () => {
    alert("추가됐습니다.")
    setName("");
    setAge("");
    // 새로운 형태의 Todo를 만든다.
    // 2. Todo를 배열에 더한다.
    const NewTodo = {
      id: users.length + 1,
      age: age,
      name: name,
    }
    setUers([...users, NewTodo]);
  }

  // 삭제 버튼 클릭 (setUers(newUsers); 한 번 더 이해하기)
  const clickDeleteBtnHandler = (id) => {
    alert(`삭제되었습니다.`);
    const newUsers = users.filter(user => user.id !== id);
    setUers(newUsers);
    // console.log(id);
    // "정말 삭제하시겠습니까?" 기능 넣어도 좋을 듯?
  }


  // 완료 버튼 클릭
  const clickCompleteBtnHandler = (id) => {
    alert(`완료되었습니다.`);
    const newUsers = users.filter(user => user.id === id);
    setUers(newUsers);
    console.log(id);
  }

  return (
    <div className="Todo-Style">
      <div>
        {/* &nbsp; 띄어쓰기 */}
        제목:&nbsp;
        <input
          value={name}
          onChange={(event) => nameChangeHandler(event)} />
        내용:&nbsp;
        <input
          value={age}
          onChange={ageChangeHandler} />
        <Button clickAddButtonHandler={clickAddButtonHandler} />
      </div>
      <div>
        {users.map(function (item) {
          return <User key={item.id} item={item} clickDeleteBtnHandler={clickDeleteBtnHandler} />;
        })}
        {users.map(function (item) {
          return <User key={item.id} item={item} clickCompleteBtnHandler={clickCompleteBtnHandler} />;
        })}
      </div>
    </div>
  );
}


export default App;