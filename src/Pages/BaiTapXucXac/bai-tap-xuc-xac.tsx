import React, { useState } from "react";
import DanhSachXucXac from "./danh-sach-xuc-xac";
import ThongTinTroChoi from "./thong-tin-tro-choi";
import TieuDeGame from "./tieu-de-game";
import "./index.css";
import { XucXacEnum } from "../enum/xucsac";
import { log } from "console";

export default function BaiTapXucXac(): JSX.Element {
  const [selectType, setSelectType] = useState<XucXacEnum | undefined>();
  const [totalWin, setTotalWin] = useState<number>(0);
  const [totalTurn, setTotalTurn] = useState<number>(0);
  const [diceList, setDiceList] = useState<string[]>([
    "./images/1.png",
    "./images/2.png",
    "./images/3.png",
  ]);

  const handleStyleSelectedType = (type: XucXacEnum): void => {
    setSelectType(type);
  };
  const handlePlaygame = (): void => {
    let totalPoint: number = 0;
    const data = [...diceList];
    diceList.forEach((ele: string, index: number): void => {
      const randomNumber = Math.floor(Math.random() * 6 + 1);
      data[index] = `./images/${randomNumber}.png`;
      totalPoint += randomNumber;
    });
    if (
      (selectType === XucXacEnum.Tai && totalPoint > 10) ||
      (selectType === XucXacEnum.Xiu && totalPoint < 10)
    ) {
      setTotalWin(totalWin + 1);
    }
    console.log(totalPoint);
    setTotalTurn(totalTurn + 1);
    setDiceList(data);
  };
  return (
    <div className="game">
      <TieuDeGame />
      <DanhSachXucXac
        diceList={diceList}
        handleStyleSelectedType={handleStyleSelectedType}
      />
      <ThongTinTroChoi
        handlePlaygame={handlePlaygame}
        selectType={selectType}
        totalWin={totalWin}
        totalTurn={totalTurn}
      />
    </div>
  );
}
