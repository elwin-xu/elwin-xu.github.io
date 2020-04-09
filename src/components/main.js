import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './header';
// import Projects from './projects/projects';
// import Experience from './experience/experience';
// import Education from './education/education';
// import Contact from './contact/contact';
import Footer from './footer';
import Home from './home/home';

const Main = () => (
    <>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/projects" component={Projects} />
            <Route path="/experience" component={Experience} />
            <Route path="/education" component={Education} />
            <Route path="/contact" component={Contact} /> */}
        </Switch>
        <Footer />
    </>

);

export default Main;