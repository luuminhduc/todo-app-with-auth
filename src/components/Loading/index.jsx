import React from "react";
import { useSelector } from "react-redux";

const Loading = ({ status }) => {
  const commonReducer = useSelector((state) => state.commonReducer);
  const { loading } = commonReducer;
  return status || loading ? (
    <div className="loading">
      <div className="loading-circle"></div>
    </div>
  ) : (
    ""
  );
};

export default Loading;
