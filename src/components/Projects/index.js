import Loader from 'react-loaders';
import React, { useEffect, useState } from "react";
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { ProjectCard } from '../ProjectCard';
import { Col, Tab, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import bat from '../assets/images/batjpg.jpg';
import mb from '../assets/images/mb.jpeg';
import tdl from '../assets/images/tdl.png';
import darj from '../assets/images/darj.png'

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [activeTab, setActiveTab] = useState("first");

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, []);

    const handleTabSelect = (key) => {
        setActiveTab(key);
    };

    const projects1 = [
        {
            title: "MovieBase",
            desc: "Get latest movie details",
            imgUrl: mb,
            lnk: "https://zevoker.github.io/portfolio/",
        },
        {
            title: "TITLE",
            desc: "Desgin & Development",
            imgUrl: bat,
            lnk: "https://zevoker.github.io/to-do-list/",
        },
        {
            title: "TITLE",
            desc: "Desgin & Development",
            imgUrl: bat,
            lnk: "https://zevoker.github.io/to-do-list/",
        },
        {
            title: "TITLE",
            desc: "Desgin & Development",
            imgUrl: bat,
            lnk: "https://zevoker.github.io/to-do-list/",
        },
        {
            title: "TITLE",
            desc: "Desgin & Development",
            imgUrl: bat,
            lnk: "https://zevoker.github.io/to-do-list/",
        },
        {
            title: "TITLE",
            desc: "Desgin & Development",
            imgUrl: bat,
            lnk: "https://zevoker.github.io/to-do-list/",
        }
    ];
    const projects2 = [
        {
            title: "To-do-list",
            desc: "Keep track of all your tasks",
            imgUrl: tdl,
            lnk: "https://zevoker.github.io/to-do-list/",
        },
        {
            title: "Code.Init()",
            desc: "Travel, Stay and Food App",
            imgUrl: darj,
            lnk: "https://mrchr0matic.github.io/darj/",
        },
        {
            title: "TITLE",
            desc: "Desgin & Development",
            imgUrl: bat,
            lnk: "https://zevoker.github.io/to-do-list/",
        },
        {
            title: "TITLE",
            desc: "Desgin & Development",
            imgUrl: bat,
            lnk: "https://zevoker.github.io/to-do-list/",
        },
        {
            title: "TITLE",
            desc: "Desgin & Development",
            imgUrl: bat,
            lnk: "https://zevoker.github.io/to-do-list/",
        },
        {
            title: "TITLE",
            desc: "Desgin & Development",
            imgUrl: bat,
            lnk: "https://zevoker.github.io/to-do-list/",
        }
    ];

    return (
        <>
            <div className="contain projects-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']} idx={15} />
                    </h1>
                </div>
                <section className="project" id="project">
                    <Tab.Container id="projects-tab" defaultActiveKey="first" onSelect={handleTabSelect}>
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center flex-column" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Full Stack</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Front End</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Other</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={6}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        {activeTab === "first" && (
                                            projects1.map((project, index) => (
                                                <ProjectCard key={index} {...project} />
                                            ))
                                        )}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        {activeTab === "second" && (
                                            projects2.map((project, index) => (
                                                <ProjectCard key={index} {...project} />
                                            ))
                                        )}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        {activeTab === "third" && (
                                            // projects1.map((project, index) => (
                                            //     <ProjectCard key={index} {...project} />
                                            // ))
                                            <h2>hello</h2>
                                        )}
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </section >
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Projects;