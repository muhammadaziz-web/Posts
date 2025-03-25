import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import { Toaster } from "react-hot-toast";
import Carigory from "./companent/Cotegoriy";
import AddPost from "./companent/AddPost";
import AddCategory from "./companent/AddCategory";
import EditPost from "./companent/EditPost";
import EditCategory from "./companent/EditCategory";

function App() {
  return (
    <Provider theme={defaultTheme}>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Carigory />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/edit-category/:id" element={<EditCategory />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
