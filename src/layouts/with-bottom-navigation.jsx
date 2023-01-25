import { BottomNavigation } from "../components/bottom-navigation";
import {
  StyledWithBottonNavigationContainer,
  StyledWithBottonNavigationContent,
} from "./with-bottom-navigation.styled";

export function LayoutWithBottonNavigation({ children }) {
  return (
    <StyledWithBottonNavigationContainer>
      <StyledWithBottonNavigationContent>
        {children}
      </StyledWithBottonNavigationContent>
      <BottomNavigation />
    </StyledWithBottonNavigationContainer>
  );
}
