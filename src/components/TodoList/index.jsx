import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAllTodos } from "../../redux/action/todoAction/actions";

const TodoList = () => {
  const param = useParams();
  const todoReducer = useSelector((state) => state.todoReducer);

  const firebaseReducer = useSelector((state) => state.firebaseReducer);
  const { auth } = firebaseReducer;

  const { todoList, type } = todoReducer;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [param, dispatch]);

  const renderAllTodo = (arr) => {
    return arr?.map((item) => (
      <div className="todo-item shadow_sm">{item.title}</div>
    ));
  };

  const renderTypeTodoList = (todoArr) => {
    switch (type) {
      case "all":
        return renderAllTodo(todoArr);
      default:
        return "";
    }
  };

  const renderTodoList = () => {
    const todoArr = todoList.filter((el) => el.uid === auth.uid);
    return todoArr.length > 0 ? renderTypeTodoList(todoArr) : "";
  };

  return (
    <div className="todoList">
      <div className="todoList-container">{renderTodoList()}</div>
    </div>
  );
};

export default TodoList;
