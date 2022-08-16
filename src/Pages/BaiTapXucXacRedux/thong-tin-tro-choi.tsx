import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { xucXacActions } from "../../store/reducers/xucxacReducer";
import { AppDispatch, RootState } from "../../store/store";
import { XucXacEnum } from "../enum/xucsac";

interface Props {
}
export default function ThongTinTroChoi(props: Props): JSX.Element {
  const { selectedType, totalTurn, totalWin } = useSelector(
    (state: RootState) => state.xucXacReducer
  );
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="thongTinTroChoi text-center">
      <div>
        <div className="display-4">
          BẠN CHỌN: <span className="text-danger"> {selectedType}</span>
        </div>
        <div className="display-4">
          BÀN THẮNG: <span className="text-success"> {totalWin}</span>
        </div>
        <div className="display-4">
          TỔNG SỐ BÀN CHƠI: <span className="text-primary"> {totalTurn}</span>
        </div>
      </div>
      <button
        onClick={() => dispatch(xucXacActions.handlePlaygame())}
        className="btn btn-success p-2 display-4 mt-5"
      >
        Play game
      </button>
    </div>
  );
}
