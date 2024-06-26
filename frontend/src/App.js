// React Router
import {Route, Routes} from 'react-router-dom';
import React, { Suspense } from 'react';


// Styles
import './styleSheet/main/app.css';
import './styleSheet/main/main-site/main-site.css'
import './styleSheet/main/components/header/header.css'
import './styleSheet/main/components/footer/footer.css'
import './styleSheet/main/components/nav-bar/nav-bar.css'
import './styleSheet/main/components/subject-descritpion/subject-description.css'
import './styleSheet/main/components/skill-description/skill-description.css'
import './styleSheet/main/pick-semester/pick-semester.css'
import './styleSheet/main/subjects/subjects.css'


// Components
import Semester from './containers/pick-semester/semester.js';
const Header = React.lazy(() => import('./components/header.js'));
const Footer = React.lazy(() => import('./components/footer.js'));
const MainSite = React.lazy(() => import('./containers/main-site/main.js'));
const Subjects = React.lazy(() => import('./containers/subjects/subjects.js'));



function App() {
    return (
        <div className="App">
            <Header />
			<Suspense>
                <Routes>
                    <Route path="/" element={<MainSite />} />
                    <Route path="roadmap-enter" element={<Semester />} />
                    <Route path="roadmap-enter/:semesterId" element={<Subjects />} />
                    <Route path="roadmap-enter/:semesterId/:subjectName" element={<Subjects />} />
                    <Route path="roadmap-enter/:semesterId/:subjectName/:skillId" element={<Subjects />} />
                </Routes>
            </Suspense>
            <Footer />
        </div>
    );
}


export default App;
