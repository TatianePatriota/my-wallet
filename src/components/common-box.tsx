import styled from "styled-components";
import { PropsWithChildren } from "react";

const StyledBox = styled.div<{ justify: string }>`
  padding-left: ${({ theme }) => theme.gutter.default}px;
  padding-right: ${({ theme }) => theme.gutter.default}px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: ${({ justify }) => justify ?? "inherit"};
`;

export type BoxPropsType = PropsWithChildren<{
  justify: string;
}>;

export function Box({ children, justify }: BoxPropsType): JSX.Element {
  return <StyledBox justify={justify}>{children}</StyledBox>;
}
