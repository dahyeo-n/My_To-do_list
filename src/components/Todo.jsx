const Todo = ({ item, clickDeleteBtnHandler, clickCompleteBtnHandler }) => {
    return (<div key={item.id}>
        <div><b>{item.title}</b></div>
        <div>{item.contents}</div>
        <button onClick={() => clickDeleteBtnHandler(item.id)}>삭제</button>
        <button onClick={() => clickCompleteBtnHandler(item.id)}>완료</button>
    </div>)
}


export default Todo