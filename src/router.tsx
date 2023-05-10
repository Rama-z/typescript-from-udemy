import { createBrowserRouter } from "react-router-dom";
import RickAndMorty from "./pages/RickAndMorty";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/rick",
    element: <RickAndMorty />,
  },
]);

export default router;
