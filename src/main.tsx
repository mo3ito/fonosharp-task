import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/ui/Layout.tsx";
import ThemeContextProvider from "./context/ThemeContext.tsx";
import ReactQueryProvider from "./providers/ReactQueryProvider.tsx";
import ToastifyProvider from "./providers/ToastifyProvider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <App /> }],
  },
]);

createRoot(document.getElementById("root")!).render(
  <ReactQueryProvider>
    <ThemeContextProvider>
      <RouterProvider router={router} />
      <ToastifyProvider/>
    </ThemeContextProvider>
  </ReactQueryProvider>
);
