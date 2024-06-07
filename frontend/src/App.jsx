// App.jsx
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Header';
import Footer from './components/Footer';
import ContactPage from './pages/contact/ContactPage';
import About from './pages/about/about';
import HomePage from './pages/home/homePage';
import CoursesPage from './pages/courses/CoursesPage';
import NotFound from './pages/notfound/NotFoundPage';
import Login from './pages/auth/login';
import SignUp from './pages/auth/signUp';
import { AuthProvider } from './context/auth';

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Navbar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/courses" element={<CoursesPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
