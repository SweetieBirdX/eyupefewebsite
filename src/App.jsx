import { Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';

const MiniApps = lazy(() => import('./pages/MiniApps'));
const FeaturedProjects = lazy(() => import('./pages/FeaturedProjects'));
const ToDoList = lazy(() => import('./pages/ToDoList'));
const ComingSoon = lazy(() => import('./pages/ComingSoon'));

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Footer />
          </>
        } />
        <Route path="/mini-apps" element={
          <Suspense fallback={<div>Yükleniyor...</div>}>
            <MiniApps />
          </Suspense>
        } />
        <Route path="/featured-projects" element={
          <Suspense fallback={<div>Yükleniyor...</div>}>
            <FeaturedProjects />
          </Suspense>
        } />
        <Route path="/todolist" element={
          <Suspense fallback={<div>Yükleniyor...</div>}>
            <ToDoList />
          </Suspense>
        } />
        <Route path="/comingsoon" element={
          <Suspense fallback={<div>Yükleniyor...</div>}>
            <ComingSoon />
          </Suspense>
        } />
      </Routes>
    </>
  );
}

export default App;
