import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import WhyChooseUs from './components/WhyChooseUs';
import Compliance from './components/Compliance';
import OurTeam from './components/OurTeam';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

// Combined homepage with sections
const FullHomePage = () => (
  <>
    <section id="home"><Home /></section>
    <section id="about"><About /></section>
    <section id="services"><Services /></section>
    <section id="projects"><Projects /></section>
    <section id="why-choose-us"><WhyChooseUs /></section>
    <section id="compliance"><Compliance /></section>
    <section id="our-team"><OurTeam /></section>
    <section id="testimonials"><Testimonials /></section>
    <section id="contact"><Contact /></section>
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FullHomePage />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetails />} />
          <Route path="why-choose-us" element={<WhyChooseUs />} />
          <Route path="compliance" element={<Compliance />} />
          <Route path="our-team" element={<OurTeam />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;