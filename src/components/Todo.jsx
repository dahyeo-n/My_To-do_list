const Todo = ({ item, clickDeleteBtnHandler, clickCompleteBtnHandler }) => {
    return (
        <div className="writedTodo" key={item.id}>
            <div><b>{item.title}</b></div>
            <div>{item.contents}</div>
            <button onClick={() => clickDeleteBtnHandler(item.id)}>삭제</button>
            <button onClick={() => clickCompleteBtnHandler(item.id)}>{!item.isDone ? "완료" : "취소"}</button>
        </div>)
}


export default Todo