import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Register from "./components/Register";
import Register1 from "./components/Register1";
import SignUp from "./components/SignUp";
import reportWebVitals from "./reportWebVitals";
import Loading from "./components/Loading";
import RegisterFinish from "./components/RegsterFinish";
import Login from "./components/Login";
import Validation from "./components/Validation";
import ProductDetail from "./components/ProductDetail";
import Certification from "./components/Certification";
import DetailOthers from "./components/Detail_others";
import DetailMe from "./components/Detail_me";
import SearchView from "./components/SearchView";
import Rank from "./components/Rank";

import ProductDetail_logedin from "./components/ProductDetail_logedin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>,
    children: [
      { index: true, path: "/", element: <Main /> },
      { path: "/register", element: <Register /> },
      { path: "/register1", element: <Register1 /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/loading", element: <Loading /> },
      { path: "/login", element: <Login /> },
      { path: "/registerfinish", element: <RegisterFinish /> },
      { path: "/productdetail", element: <ProductDetail /> },
      { path: "/Certification", element: <Certification /> },
      { path: "/detail_others", element: <DetailOthers /> },
      { path: "/detail_me", element: <DetailMe /> },
      { path: "/search_view", element: <SearchView /> },
      { path: "/rank", element: <Rank /> },

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
