import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoDetail from "../base/TodoDetail";
import TodoPack from "../base/TodoPack";

const TodoNav = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoPack />} />
        <Route path="/detail/:id" element={<TodoDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default TodoNav;
