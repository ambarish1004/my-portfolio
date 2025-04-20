import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Hero from './components/Hero';
import Layout from './components/Layout';
import SmoothScroll from './components/SmoothScroll';
import './styles/global.css';
import About from './containers/About';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Showcase from './components/Showcase';
import Lenis from '@studio-freight/lenis';
import Blog from './pages/Blog';
import Post from './pages/Post';
import Testimonials from './containers/Testimonials/Testimonials';
// import ClientCarousel from "./components/ClientCarousel";
import CustomCursor from "./components/CustomCursor";
import useKonamiCode from "./hooks/useKonamiCode";
import SecretPage from "./pages/SecretPage";
import Contact from "./pages/Contact";


const App = () => {
  const navigate = useNavigate();
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useKonamiCode(() => {
    console.log("💥 Konami Code Activated!");
    navigate("/secret");
  });

  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Projects />
                <Timeline />
                <Showcase />
                <Testimonials />
                {/* <ClientCarousel /> */}
                <Contact />
              </>
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="/secret" element={<SecretPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
