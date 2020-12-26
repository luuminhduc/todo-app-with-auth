import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDragEnd,
  getDragStart,
  swapTodoItem,
} from "../../redux/action/dragDropAction/actions";
import {
  deleteTodo,
  selectTodo,
  updateTodo,
} from "../../redux/action/todoAction/actions";

const TodoItem = ({ item }) => {
  const firebaseReducer = useSelector((state) => state.firebaseReducer);
  const todoReducer = useSelector((state) => state.todoReducer);
  const dragDropReducer = useSelector((state) => state.dragDropReducer);

  const { startIndex, endIndex } = dragDropReducer;

  const { todoList } = todoReducer;
  const { auth } = firebaseReducer;

  const todoArr = todoList.filter((el) => el.uid === auth.uid);

  const dispatch = useDispatch();

  useEffect(() => {
    if ((startIndex, endIndex)) {
      dispatch(swapTodoItem(startIndex, endIndex));
    }
  }, [dispatch, endIndex]);

  const handleUpdate = (item) => {
    dispatch(updateTodo({ ...item, completed: !item.completed }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleDragLeave = (e) => {
    e.target.classList.remove("active");
  };

  const handleEdit = (item) => {
    dispatch(selectTodo(item));
  };

  const handleDragStart = () => {
    const index = todoArr.findIndex((el) => el.id === item.id);
    item.index = index;
    dispatch(getDragStart(item));
  };

  const handleDrop = (e) => {
    const index = todoArr.findIndex((el) => el.id === item.id);
    item.index = index;
    dispatch(getDragEnd(item));
    e.target.classList.remove("active");
  };

  const handleDragEnter = (e) => {
    e.target.classList.add("active");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      className="todo-item shadow_sm"
    >
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
        <button onClick={() => handleEdit(item)} className="btn_sm">
          <i className="fas fa-pen"></i>
        </button>
        <button onClick={() => handleDelete(item.id)} className="btn_sm">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
