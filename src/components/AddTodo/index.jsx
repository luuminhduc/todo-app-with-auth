import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAlert } from "../../redux/action/commonAction/actions";
import { addTodo } from "../../redux/action/todoAction/actions";
import { timeStamp } from "../../firebase/config";

const AddTodo = () => {
  const firebaseReducer = useSelector((state) => state.firebaseReducer);
  const todoReducer = useSelector((state) => state.todoReducer);
  const { selectedTodo } = todoReducer;
  const { auth } = firebaseReducer;
  const { uid } = auth;

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      const todo = {
        title,
        completed: false,
        uid,
        time: timeStamp(),
      };

      dispatch(addTodo(todo));
      setTitle("");
    } else {
      dispatch(
        handleAlert({
          text: "Please give your todo a title",
          status: "err",
          id: Math.random(),
        })
      );
    }
  };

  return (
    <div className="addTodo">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add todo"
          className="shadow_sm"
          id="editTodo"
        />

        <button className="btn_md btn_primary btn_main">
          Add <i className="fas fa-plus"></i>
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
