import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  selectTodo,
  updateTodo,
} from "../../redux/action/todoAction/actions";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleUpdate = (item) => {
    dispatch(updateTodo({ ...item, completed: !item.completed }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (item) => {
    dispatch(selectTodo(item));
  };
  return (
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
