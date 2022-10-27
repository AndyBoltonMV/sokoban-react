import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  grid-column: ${(props) => props.column};
  grid-row: ${(props) => props.row};
`;
