import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './pages/landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

function Routes() {
    return (
        <BrowserRouter>
            <Route path='/' exact component={LandingPage} />
            <Route path='/study' component={TeacherList} />
            <Route path='/give-classes' component={TeacherForm} />
        </BrowserRouter>
    )
}

export default Routes;