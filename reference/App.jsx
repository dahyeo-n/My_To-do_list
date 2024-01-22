import React, { useState } from "react";
import "./App.css";
import Button from "components/button";
import Todo from "components/Todo";

// - UI 구현
// - Todo 추가
// - Todo 삭제
// - Todo 완료 상태 변경(완료 ↔ 진행중)

// 이름 비슷하게 짓지 않고 최대한 직관적이게!
// 컴포넌트는 늘 맨앞이 '대문자'!
const App = () => {

  const [todo, setTodo] = useState([]);

  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }

  const contentsChangeHandler = (event) => {
    setContents(event.target.value);
  }

  // 추가 버튼 클릭
  const clickAddButtonHandler = () => {
    alert("추가됐습니다.")
    // 1. 새로운 형태의 Todo를 만든다.
    // 2. Todo를 배열에 더한다.
    // 생성자 함수 이해하기! (맨앞 대문자로 시작) - JS문법반 5-3~5-8
    const newTodo = {
      id: todo.length + 1,
      title,
      contents: contents,
      isDone: false,
    }
    // isDone: false 확실히 이해하기!
    // set~~: [불변성] 객체 or 배열일 땐 obj처럼
    setTodo([...todo, newTodo]);
    setTitle("");
    setContents("");
  }

  // 삭제 버튼 클릭 (setTodo(deleteTodo); 확실히 이해 필요)
  const clickDeleteBtnHandler = (id) => {
    alert(`삭제되었습니다.`);
    // 클릭한 id 값에 해당하지 않는 것만 보여줘
    const deleteTodo = todo.filter(todo => todo.id !== id);
    setTodo(deleteTodo);
  }

  // 완료 버튼 클릭
  // map이랑 spread 확실히 이해 필요
  const clickCompleteBtnHandler = (id) => {
    const temp = todo.map((card) => {
      if (card.id === id) {
        card.isDone = !card.isDone;
      }
      return card;
    });
    setTodo([...temp]);
  }

  return (
    <div style={{ width: "1200px", minwidth: "800px", margin: "auto", }} >
      <div className="Header-Style"><h3>&nbsp;To-do List</h3> <h3>React</h3> </div>
      <div className="Todo-Style">
        {/* &nbsp; 띄어쓰기 */}
        TITLE&nbsp;
        <input
          value={title}
          onChange={(event) => titleChangeHandler(event)} />
        Contents&nbsp;
        <input
          value={contents}
          onChange={contentsChangeHandler} />
        {/* btn 연결 확실히 이해하기 */}
        <Button clickAddButtonHandler={clickAddButtonHandler} />
      </div>
      <div><h1>&nbsp;Working...❤️‍🔥</h1></div>
      <div className="TodoBox-Style">
        {todo.map(function (item) {
          return !item.isDone ? (<Todo key={item.id} item={item} clickDeleteBtnHandler={clickDeleteBtnHandler} clickCompleteBtnHandler={clickCompleteBtnHandler} />) : null
        })}

        {/* <p>태그는 머가 문제지..? - inline 요소라서 문제 */}
      </div>
      <div><h1>&nbsp;Done!🌟</h1></div>
      <div className="TodoBox-Style">
        {todo.map(item => {
          return item.isDone ? (<Todo key={item.id} item={item} clickDeleteBtnHandler={clickDeleteBtnHandler} clickCompleteBtnHandler={clickCompleteBtnHandler} />) : null
        })}
      </div>
      <div>
      </div>
    </div>
  );
}


// export default App;