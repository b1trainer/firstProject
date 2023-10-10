import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./components/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import TodoPage from "./components/todoList/TodoPage";
import Weather from "./components/weather/Weather";
import Layout from "./components/layout/Layout";
import HomePage from "./components/home/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
    errorElement: <div>Error</div>,
  },
  {
    path: "/todo",
    element: (
      <Layout>
        <TodoPage />
      </Layout>
    ),
    errorElement: <div>Error</div>,
  },
  {
    path: "/weather",
    element: (
      <Layout>
        <Weather />
      </Layout>
    ),
    errorElement: <div>Error</div>,
  },
  {
    path: "*",
    element: <Layout>Error</Layout>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
