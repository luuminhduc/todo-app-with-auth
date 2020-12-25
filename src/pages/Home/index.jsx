import React from "react";
import { useSelector } from "react-redux";
import AddTodo from "../../components/AddTodo";
import TodoList from "../../components/TodoList";

const Home = () => {
  const firebaseReducer = useSelector((state) => state.firebaseReducer);
  const commonReducer = useSelector((state) => state.commonReducer);
  const { isLight } = commonReducer;
  const { auth } = firebaseReducer;
  return (
    <div className={`home ${!isLight ? "dark" : ""}`}>
      <div className="container_md">
        {auth.uid ? (
          <React.Fragment>
            <AddTodo />
            <TodoList />
          </React.Fragment>
        ) : (
          <div className="alert_warning">
            <p>
              It looks like you are not log in , please log in to use the app
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
