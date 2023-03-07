import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledWithBottonNavigationContainer = styled.div`
  flex-direction: column;
  width: 100%;
  display: flex;
`;

export const StyledWithBottonNavigationContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledBackAction = styled(NavLink)`
  padding: ${({ theme }) => theme.gutter.default}px
    ${({ theme }) => theme.gutter.default}px 0;
  background-color: ${({ theme }) => theme.colors.background};
`;
