import { Img } from "../globalStyles";

export const Tile = ({ asset, row, column }) => {
  const assetKey = ["empty", "wall", "floor", "dot"];
  const file = `./assets/${assetKey[asset]}.png`;
  return <Img src={file} column={column} row={row} />;
};
