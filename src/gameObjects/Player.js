import { useState } from "react";
import { Img } from "../globalStyles";

export const Player = ({ col, row }) => {
  return <Img src="./assets/player.png" column={col} row={row} />;
};
