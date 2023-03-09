import { createBrowserRouter } from "react-router-dom";
import { LayoutWithBottonNavigation } from "./layouts/with-bottom-navigation";
import { Home } from "./routes/home";
import { Profile } from "./routes/profile";
import { Transactions } from "./routes/transactions";

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
    element: <Profile />,
  },
  {
    path: "/todas-as-transacoes",
    element: <Transactions />,
  },
]);
