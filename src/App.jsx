import React, { useState } from "react";
import "./App.css";
import Button from "components/button";
import Todo from "components/Todo";
import { getByDisplayValue } from "@testing-library/react";

// - UI 구현하기
// - Todo 추가 하기
// - Todo 삭제 하기
// - Todo 완료 상태 변경하기(완료 ↔ 진행중)

// 컴포넌트는 늘 맨앞이 '대문자'!
const App = () => {

  const [todo, setTodo] = useState([
    // { id: 1, title: "1월 21일", contents: "개인과제 제출" },
    // { id: 2, title: "1월 21일", contents: "일찍 자기.." },
    // { id: 3, title: "1월 21일", contents: "내일 할 일 정리" },
  ]);

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
    setTitle("");
    setContents("");
    // 1. 새로운 형태의 Todo를 만든다.
    // 2. Todo를 배열에 더한다.
    const NewTodo = {
      id: todo.length + 1,
      title,
      contents: contents,
    }
    setTodo([...todo, NewTodo]);
  }

  // 삭제 버튼 클릭 (setTodo(deleteTodo); 한 번 더 이해하기)
  // const [show, setShow] = useState(false);
  // setShow(true);

  const clickDeleteBtnHandler = (id) => {
    alert(`삭제되었습니다.`);
    // 클릭한 id 값에 해당하지 않는 것만 보여줘
    const deleteTodo = todo.filter(todo => todo.id !== id);
    setTodo(deleteTodo);
    // console.log(id);
    // "정말 삭제하시겠습니까?" 기능 넣어도 좋을 듯?
  }


  // 완료 버튼 클릭
  const clickCompleteBtnHandler = (id) => {
    alert(`완료되었습니다.`);
    const CompleteTodo = todo.filter(function (todo) { return todo.id === id ? `${id}가 맞습니다` : `${id}가 틀립니다` });
    setTodo(CompleteTodo);
    // function Greeting(props) {
    //   const isLoggedIn = props.isLoggedIn;
    //   if (isLoggedIn) {
    //     return <UserGreeting />;
    //   }
    //   return dispaly none
    // }
  }

  return (
    <div>
      <div><h3>&nbsp;To-do List</h3></div>
      <div className="Todo-Style">
        {/* &nbsp; 띄어쓰기 */}
        제목:&nbsp;
        <input
          value={title}
          onChange={(event) => titleChangeHandler(event)} />
        내용:&nbsp;
        <input
          value={contents}
          onChange={contentsChangeHandler} />
        <Button clickAddButtonHandler={clickAddButtonHandler} />
      </div>
      <div><h1>&nbsp;Working...❤️‍🔥</h1></div>
      <div className="TodoBox-Style">
        <p>{todo.map(function (item) {
          return <Todo key={item.id} item={item} clickDeleteBtnHandler={clickDeleteBtnHandler} />;
        })}</p>

      </div>
      <div><h1>&nbsp;Done!🌟</h1></div>
      <div className="TodoBox-Style">
        <p>{todo.map(function (item) {
          return <Todo key={item.id} item={item} clickCompleteBtnHandler={clickCompleteBtnHandler} />;
        })}</p>
      </div>
      <div>
      </div>
      {/* const isDone = function name(params) {
      }; */}
    </div>
  );
}


export default App;