import React from "react";
import Ticker from "react-ticker";
import file from "../Data/data.json";
import { ListGroupItem } from "react-bootstrap";
import { Typography } from "@mui/material";
const TickerComp = () => {
  const abrv = file.s;
  const batv = file.BATV;
  let obj = [];
  for (let i = 0; i < abrv.length; i++) {
    obj.push({ name: abrv[i], data: batv[i] });
  }
  const items = obj.map((item) => (
    <Typography>
      {item.name} &nbsp; <b>{item.data}</b>&nbsp;&nbsp;
    </Typography>
  ));
//POTENTIAL FOR IMAGES AND CUSTOMIZATION FOR TICKER PARAMS
  return (
    <div>
    <Typography>
      Live
      <b> BATV:</b>
      </Typography>
      <ListGroupItem
        style={{ background: "white", borderRadius: "1px", maxHeight: "4vh" }}
      >
        <Ticker mode={"chain"}>
          {({ index }) => <div>{items[index]}</div>}
        </Ticker>
      </ListGroupItem>
      <br />
    </div>
  );
};
export default TickerComp;
