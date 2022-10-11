import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { detailTodo } from "../../redux/modules/Todos";

function TodoDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);
  console.log(todo);

  useEffect(() => {
    dispatch(detailTodo(params.id));
  }, [dispatch, params.id]);
  return (
    <Dis>
      <Detailbox>
        <div>
          <p>id : {params.id}</p>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            이전으로
          </button>
        </div>
        <h1>{todo.title}</h1>
        <h3>{todo.contents}</h3>
      </Detailbox>
    </Dis>
  );
}
const Dis = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
const Detailbox = styled.div`
  width: 500px;
  height: 600px;
  border: 2px solid black;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    border-radius: 15px;
    padding: 0px 10px;
  }

  p {
    font-size: 20px;
  }

  button {
    width: 90px;
    border: none;
    border-radius: 10px;
    background-color: #4b4c5a;
    font-weight: 700;
    font-size: 15px;
    color: white;

    :hover {
      cursor: pointer;
      transform: scale(0.95);
    }
  }
`;
export default TodoDetail;
