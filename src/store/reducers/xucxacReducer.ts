import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { XucXacEnum } from "../../Pages/enum/xucsac";

interface XucXacState {
  selectedType: XucXacEnum | undefined;
  totalWin: number;
  totalTurn: number;
  diceList: string[];
}

const INITIAL_STATE: XucXacState = {
  //ràng buộc
  selectedType: undefined,
  totalWin: 0,
  totalTurn: 0,
  diceList: ["./images/1.png", "./images/2.png", "./images/3.png"],
};
//}as XucXacState; => ép kiểu
const xucXacSlice = createSlice({
  name: "xucXac",
  initialState: INITIAL_STATE,
  reducers: {
    handleStyleSelectedType(
      state: XucXacState,
      action: PayloadAction<XucXacEnum>
    ) {
      state.selectedType = action.payload;
    },
    handlePlaygame(state: XucXacState) {
      let totalPoint: number = 0;
      const data = [...state.diceList];
      state.diceList.forEach((ele: string, index: number): void => {
        const randomNumber = Math.floor(Math.random() * 6 + 1);
        data[index] = `./images/${randomNumber}.png`;
        totalPoint += randomNumber;
      });
      if (
        (state.selectedType === XucXacEnum.Tai && totalPoint > 10) ||
        (state.selectedType === XucXacEnum.Xiu && totalPoint < 10)
      ) {
        state.totalWin += 1;
        // setTotalWin(state.totalWin + 1);
      }
      state.totalTurn += 1;
      state.diceList = data;
      //   setTotalTurn(state.totalTurn + 1);
      //   setDiceList(data);
    },
  },
});

export const xucXacActions = xucXacSlice.actions;

export const xucXacReducer = xucXacSlice.reducer;
