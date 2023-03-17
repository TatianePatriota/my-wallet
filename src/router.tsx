import { createBrowserRouter } from "react-router-dom";
import { Home } from "./routes/home";
import { Profile } from "./routes/profile";
import { Transactions } from "./routes/transactions";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
