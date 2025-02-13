import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import AdminProgramCreationPage from "./pages/AdminProgramCreationPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WelcomePage from "./pages/WelcomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/adminCreationProgram",
        element: <AdminProgramCreationPage />,
      },
      {
        path: "/",
        element: <WelcomePage />,
        loader: async () => {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/programs`,
          );
          if (!response.ok) {
            throw new Response("Erreur lors de la récupération des données", {
              status: response.status,
            });
          }
          return response.json();
        },
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
