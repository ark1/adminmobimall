import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import ProjectsRun from './Projects.run';

class Projects extends React.Component {
    componentDidMount() {
        ProjectsRun();
    }
    render() {
        return (
            <ContentWrapper style="background-color:#333;">
                <div className="pull-right">
                   <button type="button" className="btn btn-default btn-sm">New Store</button>
                </div>
                <h3>My Stores</h3>
                <Row>
                   <Col lg={4} md={6}>
                   
                     <iframe width="320" height="440" src="https://www.instagram.com/mm_hotshop/?hl=en" seamless="seamless" border="0" ></iframe> 
                   </Col>
                   <Col lg={4} md={6}>
                     <iframe width="320" height="440" src="https://www.instagram.com/mm_mikeii/?hl=en" seamless="seamless"></iframe> 
                   </Col>
                   <Col lg={4} md={6}>
                     <iframe width="320" height="440" src="https://www.instagram.com/mm_diamondsjewellers/?hl=en" frameborder="0"></iframe> 
                   </Col>
                   <Col lg={4} md={6}>
                     <iframe width="320" height="440" src="https://www.instagram.com/mm_cartrader/?hl=en" frameborder="0"></iframe> 
                   </Col>
                   <Col lg={4} md={6}>
                     <iframe width="320" height="440" src="https://www.instagram.com/mm_sunbuckscoffee/?hl=en" frameborder="0"></iframe> 
                   </Col>
                   <Col lg={4} md={6}>
                     <iframe width="320" height="440" src="https://www.instagram.com/mm_domingospizza/?hl=en" frameborder="0"></iframe> 
                   </Col>
                   
                </Row>
            </ContentWrapper>
            );
    }
}

export default Projects;


