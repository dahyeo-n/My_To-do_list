import { useState } from "react";
import "./App.css";

function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}
function Header() {
    return <div>헤드입니다.</div>;
}
function InputBox({
    onClickAddButton,
    onChangeTitle,
    onChangeContent,
    title,
    content,
}) {
    return (
        <div>
            <label>
                제목:
                <input onChange={onChangeTitle} value={title} />
            </label>
            <label>
                내용:
                <input onChange={onChangeContent} value={content} />
            </label>
            <button onClick={onClickAddButton}>추가하기</button>
        </div>
    );
}
function TodoListPage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [todoCard, setTodoCard] = useState([]);

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    };
    const onChangeContent = (event) => {
        setContent(event.target.value);
    };
    const onClickAddButton = () => {
        const newCard = {
            id: todoCard.length + 1,
            title,
            content,
            isDone: false,
        };
        setTodoCard([...todoCard, newCard]);
        setTitle("");
        setContent("");
    };
    const onClickDeleteButton = (id) => {
        const temp = todoCard.filter((card) => card.id !== id);
        setTodoCard([...temp]);
    };
    const onClickIsDoneButton = (id) => {
        const temp = todoCard.map((card) => {
            if (card.id === id) {
                card.isDone = !card.isDone;
            }
            return card;
        });
        setTodoCard([...temp]);
    };
    // InputBox 부분 이해 필요
    return (
        <div>
            <InputBox
                title={title}
                content={content}
                onChangeTitle={onChangeTitle}
                onChangeContent={onChangeContent}
                onClickAddButton={onClickAddButton}
            />
            <div>
                <span>Working...</span>
                {todoCard.map((card) =>
                    !card.isDone ? (
                        <div
                            key={card.id}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                border: "1px solid black",
                            }}
                        >
                            <span>{card.title}</span>
                            <span>{card.content}</span>
                            <button
                                onClick={() => onClickIsDoneButton(card.id)}
                            >
                                완료
                            </button>
                            <button
                                onClick={() => onClickDeleteButton(card.id)}
                            >
                                삭제
                            </button>
                        </div>
                    ) : null
                )}
            </div>
            <div>
                <span>Done!!</span>
                {todoCard.map((card) =>
                    card.isDone ? (
                        <div
                            key={card.id}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                border: "1px solid black",
                            }}
                        >
                            <span>{card.title}</span>
                            <span>{card.content}</span>
                            <button
                                onClick={() => onClickIsDoneButton(card.id)}
                            >
                                취소
                            </button>
                            <button
                                onClick={() => onClickDeleteButton(card.id)}
                            >
                                삭제
                            </button>
                        </div>
                    ) : null
                )}
            </div>
        </div>
    );
}
function App2() {
    return (
        <Layout>
            <TodoListPage />
        </Layout>
    );
}

export default App2