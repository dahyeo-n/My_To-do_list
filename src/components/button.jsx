// 컴포넌트 분리
const Button = ({ clickAddButtonHandler }) => {
    return <button onClick={clickAddButtonHandler}>
        추가하기
    </button>
};

export default Button;