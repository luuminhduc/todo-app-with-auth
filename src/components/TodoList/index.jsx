import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  deleteTodo,
  fetchAllTodos,
  selectTodo,
  updateTodo,
} from "../../redux/action/todoAction/actions";

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
    const handleUpdate = (item) => {
      dispatch(updateTodo({ ...item, completed: !item.completed }));
    };

    const handleDelete = (id) => {
      dispatch(deleteTodo(id));
    };

    const handleEdit = (item) => {
      dispatch(selectTodo(item));
    };

    return arr?.map((item) => (
      <div className="todo-item shadow_sm">
        <div className="todo-item-name">
          <div
            onClick={() => handleUpdate(item)}
            className={`circle ${item.completed ? "active" : ""}`}
          >
            {item.completed ? <i className="fas fa-check"></i> : ""}
          </div>
          <span>{item.title}</span>
        </div>
        <div className="todo-item-action">
          <a onClick={() => handleEdit(item)} className="btn_sm">
            <i className="fas fa-pen"></i>
          </a>
          <button onClick={() => handleDelete(item.id)} className="btn_sm">
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
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
