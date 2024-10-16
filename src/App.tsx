import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SharedLayout, Home, Error, About, Contact, Explore } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },

      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="max-w-screen-2xl mx-auto w-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
