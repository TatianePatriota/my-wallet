import styled from "styled-components";

const StyledBox = styled.div`
  padding-left: ${({ theme }) => theme.gutter.default}px;
  padding-right: ${({ theme }) => theme.gutter.default}px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: ${({ justify }) => justify ?? "inherit"};
`;

export function Box({ children, justify }) {
  return <StyledBox justify={justify}>{children}</StyledBox>;
}
