// AppRoutes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactPage from '../pages/contact/ContactPage';
import CoursesPage from '../pages/courses/CoursesPage';
import NotFound from '../pages/notfound/NotFoundPage';

const AppRoutes = () => {
    return (
        <>

            <div>
                <h1>
                    vite appp</h1></div></>

        // <Routes>
        //     <Route path="/contact" element={<ContactPage />} />
        //     <Route path="/courses" element={<CoursesPage />} />
        //     <Route path="*" element={<NotFound />} />
        // </Routes>
    );
}

export default AppRoutes;
