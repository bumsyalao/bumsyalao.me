import React from 'react';
import ReactDOM from 'react-dom';


const Page = () => {
    return (
        <div>
            <div class="grad" id="top">
                <div class="nav">
                    <li><a class="waves-effect waves-light" href="#design">about</a></li>
                    <li><a class="waves-effect waves-light" href="#projects">projects</a></li>
                    <li><a class="waves-effect waves-light" href="#contact">contact me</a></li>
                </div>
                <div class="land wow animted fadeInUp">
                    <div class="content">
                        <h1 class="heading">Hi, I'm Bunmi</h1><a class="btn-large min waves-effect" href="#design">see more</a></div>
                </div>
                <div class="container design" id="design">
                    <div class="content wow animted fadeIn">
                        <div class="row icon-grid">
                            <div class="col s12"><i class="lnr lnr-screen"></i></div>
                        </div>
                        <h3 class="about-me">About Me</h3>
                        <div class="row about">
                            <div class="col s12 m6 offset-m3">
                                <p class="flow-text">I am passionate about learning and building stuff for the web. Able to understand business requirements, prioritise work based on highest business value and work with teams to solve problems.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container projects" id="projects">
                    <div class="content flow-content wow animted fadeInUp">
                        <div class="row">
                            <div class="col s12 center header"><i class="lnr lnr-rocket"></i>
                                <h3 class="text-white">Projects</h3>
                            </div>
                        </div>
                        <div class="row project-row">
                            <a class="col s12 m6" href="https://ideabox-now.herokuapp.com/">
                                <div class="card-panel">
                                    <h5 class="card-title grey-text text-darken-4">Ideabox</h5><span class="grey-text text-darken-3">Ideabox is a simple application that allows users to create a pool of ideas and promote collaboration.</span></div>
                            </a>
                            <a class="col s12 m6" href="https://postit-now.herokuapp.com/">
                                <div class="card-panel">
                                    <h5 class="card-title grey-text text-darken-4">Post-It</h5><span class="grey-text text-darken-3">Post-it is a simple application that allows users create groups and post messages to group and promote collaboration.</span></div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="container contact wow animted fadeInUp" id="contact">
                    <div>
                        <div class="row">
                            <div class="col s12 center header white-text"><i class="lnr lnr-coffee-cup"></i>
                                <h3 class="text-white">Contact Me</h3>
                            </div>
                        </div>
                        <div className="contacts">
                        <a href="https://github.com/bumsyalao" target="_blank"><i className="mdi mdi-github-circle contact-icon animated wobble"/><br/>GITHUB</a>
                        <a href="mailto:bumsyalao@gmail.com" target="_blank"><i className="mdi mdi-gmail contact-icon"/><br/>GMAIL</a>
                        <a href="https://bumsyalao.github.io/resume/" target="_blank"><i className="mdi mdi-file-document contact-icon"/><br/>RESUME</a>
                        <a href="https://www.linkedin.com/in/bumsyalao" target="_blank"><i className="mdi mdi-linkedin-box contact-icon"/><br/>LINKEDIN</a>
                        </div>
                    </div>
                </div>
            </div> <a class="top waves-effect waves-light" href="#top"><i class="lnr lnr-chevron-up"></i></a>
        </div>
    );
};

export default Page;
