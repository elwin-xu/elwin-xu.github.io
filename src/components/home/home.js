import React, {Component} from 'react';
import Intro from './intro';
import FeaturedProjects from './featuredProjects';
import AboutMe from './aboutMe';
import ExperienceHome from './experienceHome'
import EducationHome from './educationHome';

class Home extends Component {
    render() {
        return (
            <div>
                <Intro />
                <AboutMe />
                <FeaturedProjects />
                <ExperienceHome />
                <EducationHome />
            </div>
        )
    }
}

export default Home;