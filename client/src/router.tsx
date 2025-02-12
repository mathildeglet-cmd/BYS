import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import AdminProgramCreationPage from "./pages/AdminProgramCreationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/adminCreationProgram",
        element: <AdminProgramCreationPage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
