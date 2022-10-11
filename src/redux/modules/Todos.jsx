//액션
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SET_STATE = "SET_STATE";
const DETAIL_TODO = "DETAIL_TODO";

//액션 크리에이터

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: SET_STATE,
    payload,
  };
};

export const detailTodo = (payload) => {
  return {
    type: DETAIL_TODO,
    payload,
  };
};

//초기상태값
const initialState = {
  todoList: [
    { id: 2, title: "작업중,,", contents: "테스트 중..", isDone: false },
    { id: 1, title: "내가 해냄", contents: "내가 이걸 해냄", isDone: true },
  ],
  todo: { id: 0, title: "", contents: "", isDone: false },
};

// 리듀서
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };
    case SET_STATE:
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };
    case DETAIL_TODO: // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다.
      return {
        ...state,
        todo: state.todoList.find((todo) => todo.id === +action.payload),
      };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;
