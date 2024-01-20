const User = ({ item, clickDeleteBtnHandler, clickCompleteBtnHandler }) => {
    return (<div key={item.id}>
        {item.age} - {item.name}
        <button onClick={() => clickDeleteBtnHandler(item.id)}>삭제</button>
        <button onClick={() => clickCompleteBtnHandler(item.id)}>완료</button>
    </div>)
}


export default User