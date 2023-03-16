import { BottomNavigation } from "../components/bottom-navigation";
import { PropsWithChildren } from "react";

import {
  StyledWithBottonNavigationContainer,
  StyledWithBottonNavigationContent,
} from "./with-bottom-navigation.styled";

export type LayoutPropsType = PropsWithChildren<{}>;

export function LayoutWithBottonNavigation({ children }: LayoutPropsType) {
  return (
    <StyledWithBottonNavigationContainer>
      <StyledWithBottonNavigationContent>
        {children}
      </StyledWithBottonNavigationContent>
      <BottomNavigation />
    </StyledWithBottonNavigationContainer>
  );
}
