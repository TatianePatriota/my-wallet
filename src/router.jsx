import { createBrowserRouter } from "react-router-dom";
import { LayoutWithBottonNavigation } from "./layouts/with-bottom-navigation";
import { Home } from "./routes/home";
import { Transactions } from "./routes/transactions";

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
    element: <Transactions />,
  },
  {
    path: "/perfil",
    element: <CommingSoon />,
  },
  {
    path: "/todas-as-transacoes",
    element: <Transactions />,
  },
]);
