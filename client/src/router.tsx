import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { AdminProgramPage } from "./pages/AdminProgramPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/adminPrograms",
        element: <AdminProgramPage />,
        loader: async () => {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/admin/programs`,
          );
          if (!response.ok) {
            throw new Response(
              "Erreur lors de la récupération des programmes",
              { status: response.status },
            );
          }
          return response.json();
        },
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
