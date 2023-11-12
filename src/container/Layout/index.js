import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./layout";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";

const App = () => {
  return (
    <div className="bg-black">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="recipes/:id" element={<RecipeDetail/>} />
        </Route >
      </Routes>
    </div>
  );
};

export default App;