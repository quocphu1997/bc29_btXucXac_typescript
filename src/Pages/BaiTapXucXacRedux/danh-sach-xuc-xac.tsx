import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { xucXacActions } from "../../store/reducers/xucxacReducer";
import { AppDispatch, RootState } from "../../store/store";
import { XucXacEnum } from "../enum/xucsac";
import XucSac from "./xuc-sac";

interface Props {}

export default function DanhSachXucXac(props: Props): JSX.Element {
  const xucXacState = useSelector((state: RootState) => state.xucXacReducer);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="row text-center mt-5">
      <div className="col-5">
        <button
          onClick={() => {
            dispatch(xucXacActions.handleStyleSelectedType(XucXacEnum.Tai));
          }}
          className="btnGame"
        >
          TÀI
        </button>
      </div>
      <div className="col-2">
        {xucXacState.diceList.map((ele: string, index: number) => {
          return <XucSac key={index} ele={ele} />;
        })}
      </div>
      <div className="col-5">
        <button
          onClick={() => {
            dispatch(xucXacActions.handleStyleSelectedType(XucXacEnum.Xiu));
          }}
          className="btnGame"
        >
          XỈU
        </button>
      </div>
    </div>
  );
}
