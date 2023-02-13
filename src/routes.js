import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageContainer from './components/page-container';


function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
            <Route exact path="/" element={<PageContainer/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes