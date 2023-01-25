import { createBrowserRouter } from "react-router-dom";
import { LayoutWithBottonNavigation } from "./layouts/with-bottom-navigation";
import { Home } from "./routes/home";

function CommingSoon() {
  return (
    <LayoutWithBottonNavigation>
      <div>em construção</div>
    </LayoutWithBottonNavigation>
  );
}

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/relatorios",
    element: <CommingSoon />,
  },
  {
    path: "/contas",
    element: <CommingSoon />,
  },
  {
    path: "/perfil",
    element: <CommingSoon />,
  },
]);
