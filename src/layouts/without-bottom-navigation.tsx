import { PropsWithChildren } from "react";

import { BackIcon } from "../components/common-icons";
import {
  StyledWithBottonNavigationContainer,
  StyledWithBottonNavigationContent,
  StyledBackAction,
} from "./with-bottom-navigation.styled";

export type LayputWithoutBottomNavigation = PropsWithChildren<{}>;

export function LayoutWithoutBottomNavigation({
  children,
}: LayputWithoutBottomNavigation): JSX.Element {
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
