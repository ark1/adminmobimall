import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';

class Timeline extends React.Component {

    render() {
        return (
            <ContentWrapper>
                <h3>Ad Wizard</h3>
                { /* START timeline */ }
               <iframe src="https://www.befunky.com/create/designer/" width="1080" height="800"></iframe>
            </ContentWrapper>
            );
    }

}

export default Timeline;
