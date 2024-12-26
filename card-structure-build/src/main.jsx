import React from "react";
import ReactDOM from "react-dom/client";

import './styles/App.css'
import './styles/index.css'
import { HashtableProvider } from './components/HashtableContext';
import { FavHashtableProvider } from './components/FavoriteHashTableContext';

//Routes
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./components/routes/routes"
const router = createBrowserRouter(routes,
  {basename:import.meta.env.BASE_URL}
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashtableProvider>
      <FavHashtableProvider>
        <RouterProvider router={router} />
      </FavHashtableProvider>
    </HashtableProvider>
  </React.StrictMode>
);

