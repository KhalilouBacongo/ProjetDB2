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
import Blogs from "./routes/Blogs";
import Connecte from "./routes/connecte";
import Forgot from "./routes/Forgot";
import Inscriptions from "./routes/Inscriptions";
import UserProfile from "./routes/UserProfile";

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
          <Route path="blogs" element={<Blogs />} />
          <Route path="login" element={<Connecte />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="inscription" element={<Inscriptions />} />
          <Route path="userprofile" element={<UserProfile />} />

          <Route path="*" element={<Errorpage />} />
        </Route>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
