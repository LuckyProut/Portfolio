import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./components/layout"; 
import Home from './pages/Home/Home'; 
import About from './pages/About/About'; 
import NotFound from './pages/NotFound/NotFound'; 
import Projet from './pages/Projet/Projet';
import Contact from './pages/Contact/Contact';

const AppRouter = () => {
  return (
    <Router>
      <Layout> 
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} /> 
          <Route path="/Projet/:id" element={<Projet />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
