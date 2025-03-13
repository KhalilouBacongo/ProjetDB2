import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Acceuil from "./routes/Acceuil";
import Services from "./routes/Services";
import Formations from "./routes/Formations";
import Contact from "./routes/Contact";
import Apropos from "./routes/Apropos";
import Service from "./routes/Service";
import Errorpage from "./components/Errorpage";
import Admin from "./components/Admin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Acceuil />} />
          <Route path="services" element={<Services />} />
          <Route path="services/service/:id" element={<Service />} />
          <Route path="formation" element={<Formations />} />
          <Route path="contact" element={<Contact />} />
          <Route path="apropos" element={<Apropos />} />
          <Route path="*" element={<Errorpage />} />
        </Route>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
