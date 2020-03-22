import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import AboutMe from "./aboutme";
import Projects from './projects'


const Main = () => (
    <div>
    <section className="work-experience" id="experience">
        <div className="content-wrap divider">
            <h2>Work Experience</h2>

            <section className="job-item">
                <div className="job-details">
                    <h3>Civil Engineer - Intern</h3>
                    <p>Delta Group</p>
                    <p>Melbourne, Australia</p>
                    <p>Mar 2019 – Jun 2019</p>
                </div>
                <div className="job-summary">
                    <ul>
                        <li>QSE (Quality, Safety, and Environment) office tasks</li>
                        <li>Supported senior project engineers (on-site and off-site)</li>
                        <li>Maintained all documentation required for the monthly progress approval</li>
                        <li>Prepared drawings for fire safety inspections and audits</li>
                    </ul>
                </div>
            </section>

            <section className="job-item">
                <div className="job-details">
                    <h3>Software Engineer</h3>
                    <p>China Academy of Building Research</p>
                    <p>Beijing, China</p>
                    <p>Jun 2017 – Feb 2018</p>
                </div>
                <div className="job-summary">
                    <ul>
                        <li>Adopted agile software development methodologies while working closely with teammates and customers
              </li>
                        <li>Communicated with customers to research possible improvements of software</li>
                        <li>Designed user interface and interactive mechanism using C++ and MFC</li>
                        <li>Implemented saving functionality of calculations using JSON file format</li>
                        <li>Designed algorithms to match joint components with different sizes</li>
                        <li>Worked on the project collaboratively on Visual Studio using Git</li>
                    </ul>
                </div>
            </section>

        </div>
    </section>

    <section className="education">
        <div className="content-wrap divider">
            <h2>Education</h2>

            <section className="education-item">
                <h3>Shanghai Jiao Tong University</h3>
                <p>Shanghai, China</p>
                <p>Master's Degree (Architectural and Civil Engineering), 2014 – 2017</p>
            </section>

            <section className="education-item">
                <h3>Shanghai Jiao Tong University</h3>
                <p>Shanghai, China</p>
                <p>Bachelor's Degree (Naval Architecture and Ocean Engineering), 2010 – 2014</p>
            </section>
        </div>
    </section>
    </div>
    // <Switch>
    //     <Route exact path="/" component={Home} />
    //     <Route path="/aboutme" component={AboutMe} />
    //     <Route path="/projects" component={Projects } />
    // </Switch>
);

export default Main;