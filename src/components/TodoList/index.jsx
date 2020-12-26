import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAllTodos,
  switchType,
  updateTodo,
} from "../../redux/action/todoAction/actions";
import TodoItem from "../TodoItem";

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
    return arr?.map((item) => <TodoItem item={item} />);
  };

  const renderActiveTodos = (arr) => {
    const renderedArr = arr?.filter((el) => !el.completed);
    return renderedArr.length > 0
      ? renderedArr.map((el) => <TodoItem item={el} />)
      : "";
  };

  const renderCompletedTodos = (arr) => {
    const renderedArr = arr?.filter((el) => el.completed);
    return renderedArr.length > 0
      ? renderedArr.map((el) => <TodoItem item={el} />)
      : "";
  };

  const renderTypeTodoList = (todoArr) => {
    switch (type) {
      case "all":
        return renderAllTodo(todoArr);
      case "active":
        return renderActiveTodos(todoArr);
      case "completed":
        return renderCompletedTodos(todoArr);
      default:
        return "";
    }
  };

  const renderTodoList = () => {
    const todoArr = todoList.filter((el) => el.uid === auth.uid);
    return todoArr.length > 0 ? renderTypeTodoList(todoArr) : "";
  };

  const handleClearAllCompleted = async () => {
    const arr = todoList.filter((el) => el.uid === auth.uid);
    for (let i = 0; i < arr.length; i++) {
      await dispatch(updateTodo({ ...arr[i], completed: false }));
    }
  };

  return (
    <div className="todoList">
      {todoList.filter((el) => el.uid === auth.uid).length > 0 ? (
        <React.Fragment>
          <div className="todoList-container">{renderTodoList()}</div>
          <div className="todoList-info shadow_sm">
            <span>
              {
                todoList
                  .filter((e) => e.uid === auth.uid)
                  .filter((el) => !el.completed).length
              }{" "}
              left
            </span>
            <div className="todoList-info-type">
              <span
                onClick={() => dispatch(switchType("all"))}
                className={type === "all" ? "active" : ""}
              >
                All
              </span>
              <span
                onClick={() => dispatch(switchType("active"))}
                className={type === "active" ? "active" : ""}
              >
                Active
              </span>
              <span
                onClick={() => dispatch(switchType("completed"))}
                className={type === "completed" ? "active" : ""}
              >
                Completed
              </span>
            </div>
            <span onClick={handleClearAllCompleted}>Clear completed</span>
          </div>
        </React.Fragment>
      ) : (
        ""
      )}
    </div>
  );
};

export default TodoList;
