import styled from "styled-components";
import { deleteTodo } from "../../redux/modules/Todos";
import { updateTodo } from "../../redux/modules/Todos";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Todo({ todos }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <TodoBox>
      <p
        onClick={() => {
          navigate(`/detail/${todos.id}`);
        }}
      >
        상세보기
      </p>
      <h3>{todos.title}</h3>
      <div>{todos.contents}</div>
      <BtnBox>
        <button
          onClick={() => {
            dispatch(deleteTodo(todos.id));
          }}
        >
          삭제
        </button>
        {todos?.isDone === false ? (
          <ChangeBtn
            onClick={() => {
              dispatch(updateTodo(todos.id));
            }}
          >
            완료
          </ChangeBtn>
        ) : (
          <ChangeBtn
            onClick={() => {
              dispatch(updateTodo(todos.id));
            }}
          >
            취소
          </ChangeBtn>
        )}
      </BtnBox>
    </TodoBox>
  );
}

const TodoBox = styled.div`
  border: 4px solid gray;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
`;

const BtnBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

const ChangeBtn = styled.button`
  background-color: black;
  color: white;
`;

export default Todo;
