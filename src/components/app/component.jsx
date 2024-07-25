import { Provider } from "react-redux";
import { Layout } from "../layout/component";
import { store } from "../../redux";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { ThemeContextProvider } from "../theme-context/component";
import { MainPage } from "../main-page/components";
import { HeadphonesListContainer } from "../headphones-list/container";
import { HeadphoneContainer } from "../headphone/container";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Navigate to='/' />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "headphones",
        element: <HeadphonesListContainer />,
        children: [
          {
            path: ":headphoneId",
            element: <HeadphoneContainer />,
          },
        ],
      },
    ],
  },
  {
    path: "/about",
    element: <div>about</div>,
  },
  {
    path: "/blocked",
    element: <Navigate to='/' replace />,
  },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </Provider>
  );
};
