import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAlert } from "../../redux/action/commonAction/actions";

const AlertList = () => {
  const commonReducer = useSelector((state) => state.commonReducer);
  const dispatch = useDispatch();

  const { alertList } = commonReducer;
  return alertList.length > 0 ? (
    <div className="alert-list">
      {alertList.map((el, idx) => (
        <div className={`alert_${el.status}`}>
          <i
            onClick={() => dispatch(removeAlert(el.id))}
            className="fas fa-times"
          ></i>
          {el.text}
        </div>
      ))}
    </div>
  ) : (
    ""
  );
};

export default AlertList;
