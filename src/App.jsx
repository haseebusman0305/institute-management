// App.jsx
import './App.css';
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Navbar from './components/Header';
import Footer from './components/Footer';
import ContactPage from './pages/contact/ContactPage';
import About from './pages/about/about'
import HomePage from './pages/home/homePage';
import CoursesPage from './pages/courses/CoursesPage';
import NotFound from './pages/notfound/NotFoundPage';
function App() {
    return (
        <>
           <Navbar/>
         
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/courses" element={<CoursesPage />} />
                    <Route path="/about" element={<About/>}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>   
            </BrowserRouter>
            <Footer/>
          
        </>
    );
}

export default App;
