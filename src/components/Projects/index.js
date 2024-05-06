import Loader from 'react-loaders';
import React, { useEffect, useState } from "react";
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { Card } from '../Card';
import { ProjectCard } from '../ProjectCard';
import { Col, Tab, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import bat from '../assets/images/batjpg.jpg';
import mb from '../assets/images/mb.jpeg';
import tdl from '../assets/images/todolist.png';
import darj from '../assets/images/darj.png';
import mb2 from '../assets/images/mb2.png'
import vitalyze from '../assets/images/vitalyze.png'
import chatapp from '../assets/images/chatapp.png'
import scheduler from '../assets/images/sched.png'

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
            desc: "React + NodeJS",
            imgUrl: mb2,
            lnk: "https://moviebase-70706.web.app/",
        },
        {
            title: "NITCONF",
            desc: "React + Spring boot",
            imgUrl: mb,
            lnk: "https://moviebase-70706.web.app/",
        },
        {
            title: "ChatApp",
            desc: "React + Firebase",
            imgUrl: chatapp,
            lnk: "https://zevoker.github.io/chatApp/",
        },
        {
            title: "Vitalyze",
            desc: "React + Django",
            imgUrl: vitalyze,
            lnk: "https://code-init-2024.vercel.app/",
        },
        {
            title: "Scheduler",
            desc: "React + Firebase",
            imgUrl: scheduler,
            lnk: "https://zevoker.github.io/scheduler/",
        },
        {
            title: "TITLE",
            desc: "Desgin & Development",
            imgUrl: bat,
            lnk: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
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
            lnk: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
            title: "TITLE",
            desc: "Desgin & Development",
            imgUrl: bat,
            lnk: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
            title: "TITLE",
            desc: "Desgin & Development",
            imgUrl: bat,
            lnk: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
            title: "TITLE",
            desc: "Desgin & Development",
            imgUrl: bat,
            lnk: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
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
                                        <Nav.Link eventKey="second">Display</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Front End</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={6}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        {activeTab === "first" && (
                                            projects1.map((project, index) => (
                                                <Card key={index} {...project} />
                                            ))
                                        )}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        {activeTab === "second" && (
                                            <div className='cube-cont'>
                                                <div className='spinner'>
                                                    <div className='face1'>
                                                        <ProjectCard {...projects1[0]} />
                                                    </div>
                                                    <div className='face2'>
                                                        <ProjectCard {...projects2[0]} />
                                                    </div>
                                                    <div className='face3'>
                                                        <ProjectCard {...projects2[1]} />
                                                    </div>
                                                    <div className='face4'>
                                                        <ProjectCard {...projects1[1]} />
                                                    </div>
                                                    <div className='face5'>
                                                        <ProjectCard {...projects2[0]} />
                                                    </div>
                                                    <div className='face6'>
                                                        <ProjectCard {...projects2[1]} />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        {activeTab === "third" && (
                                            projects2.map((project, index) => (
                                                <Card key={index} {...project} />
                                            ))
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