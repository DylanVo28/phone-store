/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
import { useState, CSSProperties } from "react";
import { BounceLoader } from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function LoadingM8(props) {


  return (
    <div className="sweet-loading">

      <BounceLoader color={props.color} loading={props.loading} cssOverride={override} size={props.size} className="sweet-loading__bounce" />
    </div>
  );
}

export default LoadingM8;

LoadingM8.defaultProps={
    color: "#0061AF",
    loading: true,
    size: 150
}