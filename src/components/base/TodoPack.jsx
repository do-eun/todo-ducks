import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/modules/Todos";
import styled from "styled-components";
import Todo from "../base/Todo";

function TodoPack() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [id, setId] = useState(3);
  const todos = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();
  console.log(todos);

  return (
    <LayoutBox>
      <Header>내가 해냄 ( ˘ᴗ˘ )!!</Header>
      <form>
        <InputBox>
          <label>제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label>내용</label>
          <input
            type="text"
            value={contents}
            onChange={(e) => {
              setContents(e.target.value);
            }}
          />
        </InputBox>
        <Btn
          onClick={(e) => {
            e.preventDefault();
            if (title === "" || contents === "") {
              alert("입력해주세요.");
            } else {
              dispatch(addTodo({ id, title, contents, isDone: false }));
              setTitle("");
              setContents("");
              setId((num) => num + 1);
            }
          }}
        >
          추가하기
        </Btn>
      </form>

      <ListBox>
        <h2>작업중..⚙️</h2>
        <TodoListBox>
          {todos.map((item) => {
            if (item.isDone === false) {
              return <Todo todos={item} key={item.id} />;
            } else {
              return null;
            }
          })}
        </TodoListBox>
        <h2>완료..!! 💾</h2>
        <TodoListBox>
          {todos.map((item) => {
            if (item.isDone === true) {
              return <Todo todos={item} key={item.id} />;
            } else {
              return null;
            }
          })}
        </TodoListBox>
      </ListBox>
    </LayoutBox>
  );
}

const InputBox = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
  max-width: 700px;
`;

const Btn = styled.button`
  background-color: black;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  height: 50px;
  width: 170px;
`;

const ListBox = styled.div`
  margin-top: 10px;
  border-radius: 10px;
  border: 3px solid gray;
  padding: 24px;
`;

const TodoListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const LayoutBox = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  height: 80px;
  font-size: 60px;
  font-weight: bolder;

  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export default TodoPack;
