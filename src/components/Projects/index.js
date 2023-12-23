import Loader from 'react-loaders';
import React, { useEffect, useState } from "react";
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import '../assets/images/J.jpg'
import { Col, Container, Tab, Row } from 'react-bootstrap';

const Projects = () => {
    const projects = [
        {
            title: "TITLE",
            desc: "Desgin & Development",
            //imgUrl: { J.jpg },
        },
        {
            title: "TITLE",
            desc: "Desgin & Development",
            //imgUrl: { J.jpg },
        },
        {
            title: "TITLE",
            desc: "Desgin & Development",
            //imgUrl: { J.jpg },
        },
        {
            title: "TITLE",
            desc: "Desgin & Development",
            //imgUrl: { J.jpg },
        },
        {
            title: "TITLE",
            desc: "Desgin & Development",
            //imgUrl: { J.jpg },
        },
        {
            title: "TITLE",
            desc: "Desgin & Development",
            //imgUrl: { J.jpg },
        },
        {
            title: "TITLE",
            desc: "Desgin & Development",
            //imgUrl: { J.jpg },
        }
    ]
    return (
        <>
            <div className="projects-page">
                <Container>
                    <Row>
                        <Col>
                            <h2>Projects</h2>
                            <p>jdisdji</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Projects;