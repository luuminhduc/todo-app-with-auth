import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleAlert,
  hideModal,
} from "../../redux/action/commonAction/actions";
import {
  dropSelectedTodo,
  updateTodo,
} from "../../redux/action/todoAction/actions";

const SimpleModal = () => {
  const todoReducer = useSelector((state) => state.todoReducer);
  const { selectedTodo } = todoReducer;

  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedTodo) {
      setTitle(selectedTodo.title);
    }
  }, [dispatch, selectedTodo]);

  const handleEdit = () => {
    if (title) {
      if (title !== selectedTodo.title) {
        selectedTodo.title = title;
        dispatch(updateTodo(selectedTodo));
        dispatch(dropSelectedTodo());
      }
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

  return selectedTodo ? (
    <div className="modal">
      <div className="modal-content shadow_sm">
        <button
          onClick={() => dispatch(dropSelectedTodo())}
          className="btn_sm cancel"
        >
          <i className="fas fa-times"></i>
        </button>
        <h3>Edit todo</h3>
        <div className="edit-container">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
          />
          <button onClick={handleEdit} className="btn_md btn_primary">
            Edit
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default SimpleModal;
