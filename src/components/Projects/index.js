import Loader from 'react-loaders';
import React, { useEffect, useState } from "react";
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { Card } from '../Card';
import { Col, Tab, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import mb from '../assets/images/mb.jpeg';
import tdl from '../assets/images/todolist.png';
import darj from '../assets/images/darj.png';
import mb2 from '../assets/images/mb2.png'
import vitalyze from '../assets/images/vitalyze.png'
import chatapp from '../assets/images/chatapp.png'
import scheduler from '../assets/images/sched.png'
import pacnav from '../assets/images/pacnav.png'

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
    //Diary
    const projects1 = [
        {
            title: "Scheduler",
            desc: "Task manager with notifications",
            stack: "React + Firebase",
            imgUrl: scheduler,
            lnk: "https://zevoker.github.io/scheduler/",
        },
        {
            title: "ChatApp",
            desc: "Realtime chat application",
            stack: "React + Firebase",
            imgUrl: chatapp,
            lnk: "https://zevoker.github.io/chatApp/",
        },
        {
            title: "To-do-list",
            desc: "With canvas and drag and drop",
            stacl: "ReactJS",
            imgUrl: tdl,
            lnk: "https://zevoker.github.io/to-do-list/",
        },
    ]

    const projects2 = [
        {
            title: "Pacnav",
            desc: "3rd Place at Wix Design Challenge",
            stack: "ReactJS",
            imgUrl: pacnav,
            lnk: "https://zevoker.github.io/pacnav/",
        },
        {
            title: "Vitalyze",
            desc: "Infuse grayscale image with color",
            stack: "React + Django",
            imgUrl: vitalyze,
            lnk: "https://code-init-2024.vercel.app/",
        },
        {
            title: "Code.Init() 2023",
            desc: "Travel, Stay and Food App",
            imgUrl: darj,
            lnk: "https://mrchr0matic.github.io/darj/",
        },
    ]
    //Brevidy and nitconf image and overlay
    const projects3 = [
        {
            title: "NITCONF",
            desc: "Conference website for SE Lab'24",
            stack: "React + Spring boot",
            imgUrl: mb,
            lnk: "https://nitconf.vercel.app/",
        },
        {
            title: "MovieBase",
            desc: "Movie database with ratings",
            stack: "React + NodeJS",
            imgUrl: mb2,
            lnk: "https://moviebase-70706.web.app/",
        },
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
                                        <Nav.Link eventKey="first">Personal</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Contest</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Group</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={3}>
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
                                            projects2.map((project, index) => (
                                                <Card key={index} {...project} />
                                            ))
                                        )}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        {activeTab === "third" && (
                                            projects3.map((project, index) => (
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