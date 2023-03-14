import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { StyledBottomNavigationContainer } from "./ bottom-navigation.styled";
import { Box } from "./common-box";
import { HomeIcon, ProfileIcon, StatsIcon } from "./common-icons";

const bottomNavigationRoutes = [
  { to: "/", icon: <HomeIcon /> },
  { to: "/relatorios", icon: <StatsIcon /> },
  { to: "/perfil", icon: <ProfileIcon /> },
];

export function BottomNavigation() {
  return (
    <StyledBottomNavigationContainer>
      <Box justify="space-between">
        {bottomNavigationRoutes.map((r, i) => (
          <BottomNavigationLink key={i} {...r} />
        ))}
      </Box>
    </StyledBottomNavigationContainer>
  );
}

function BottomNavigationLink({
  to,
  icon,
}: {
  to: string;
  icon: ReactNode;
}): JSX.Element {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "active" : undefined)}
      to={to}
    >
      {icon}
    </NavLink>
  );
}
