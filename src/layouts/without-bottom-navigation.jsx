import { NavLink } from "react-router-dom";
import { BackIcon } from "../components/common-icons";
import {
  StyledWithBottonNavigationContainer,
  StyledWithBottonNavigationContent,
  StyledBackAction,
} from "./with-bottom-navigation.styled";

export function LayoutWithoutBottomNavigation({ children }) {
  return (
    <StyledWithBottonNavigationContainer>
      <StyledWithBottonNavigationContent>
        <StyledBackAction to="/">
          <BackIcon />
        </StyledBackAction>
        {children}
      </StyledWithBottonNavigationContent>
    </StyledWithBottonNavigationContainer>
  );
}
