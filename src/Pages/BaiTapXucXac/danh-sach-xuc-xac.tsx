import React from "react";
import { XucXacEnum } from "../enum/xucsac";
import XucSac from "./xuc-sac";

interface Props {
  handleStyleSelectedType: (type: XucXacEnum) => void;
  diceList: string[];
}

export default function DanhSachXucXac(props: Props): JSX.Element {
  const { handleStyleSelectedType, diceList } = props;
  return (
    <div className="row text-center mt-5">
      <div className="col-5">
        <button
          onClick={() => {
            handleStyleSelectedType(XucXacEnum.Tai);
          }}
          className="btnGame"
        >
          TÀI
        </button>
      </div>
      <div className="col-2">
        {diceList.map((ele: string, index: number) => {
          return <XucSac key={index} ele={ele}/>;
        })}
      </div>
      <div className="col-5">
        <button
          onClick={() => {
            handleStyleSelectedType(XucXacEnum.Xiu);
          }}
          className="btnGame"
        >
          XỈU
        </button>
      </div>
    </div>
  );
}
