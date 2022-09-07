import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Task1 from "./components/Task1/Task1";
import Task2 from "./components/Task2/Task2";
import Task3 from "./components/Task3/Task3";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
