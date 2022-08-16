import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BaiTapXucXac from "./Pages/BaiTapXucXac/bai-tap-xuc-xac";
import BaiTapXucXacRedux from "./Pages/BaiTapXucXacRedux/bai-tap-xuc-xac";


function App(): JSX.Element {
  return (
    <>
      {/* <BaiTapXucXac /> */}
      <BaiTapXucXacRedux />
    </>
  );
}

export default App;
