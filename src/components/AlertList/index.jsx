import React from "react";
import { useSelector } from "react-redux";

const AlertList = () => {
  const commonReducer = useSelector((state) => state.commonReducer);
  const { alertList } = commonReducer;
  return alertList.length > 0 ? (
    <div className="alert-list">
      {alertList.map((el, idx) => (
        <div className={`alert_${el.status}`}>{el.text}</div>
      ))}
    </div>
  ) : (
    ""
  );
};

export default AlertList;
