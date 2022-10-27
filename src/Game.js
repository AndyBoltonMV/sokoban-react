import styled from "styled-components";
import { Crate } from "./gameObjects/Crate";
import { Player } from "./gameObjects/Player";
import { Tile } from "./gameObjects/Tile";

export const Game = ({ map, setCurrentMap, col, row }) => {
  return (
    <main>
      <h2>Level {map.num}</h2>
      <Section width={map.layout[0].length}>
        {map.layout.map((columnArr, row) => {
          return columnArr.map((asset, column) => (
            <Tile
              key={column}
              asset={asset}
              row={row + 1}
              column={column + 1}
            />
          ));
        })}
        {map.crates.map((coords, key) => (
          <Crate key={key} column={coords[1] + 1} row={coords[0] + 1} />
        ))}
        <Player col={col + 1} row={row + 1} />
      </Section>
    </main>
  );
};

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(${(props) => props.width}, 3vw);
`;
