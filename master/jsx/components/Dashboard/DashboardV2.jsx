import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Dropdown, MenuItem, Tooltip, OverlayTrigger } from 'react-bootstrap';
import DashboardRun from './DashboardV2.run';

class DashboardV2 extends React.Component {

    componentDidMount() {
        DashboardRun(
            ReactDom.findDOMNode(this.refs.chartBar),
            ReactDom.findDOMNode(this.refs.chartSpline)
            );
    }

    render() {

        const tooltip = function(text) {
            return (
                <Tooltip id="tooltip">{text}</Tooltip>
            );
        };

        return (
            <ContentWrapper>
               
                <Row className="mb-lg">
                { /* START loader widget*/ }
                 <Col sm={ 3 } xs={ 12 } className="text-center">
                        
                        <div className="panel panel-default">
                            <div className="panel-body">
                               <a href="#" className="text-muted pull-right">
                                    <em className="fa fa-arrow-right"></em>
                                </a>
                                <div className="text-info">Today</div>
                                <canvas data-classyloader="" data-percentage="61" data-speed="20" data-font-size="40px" data-diameter="60" data-line-color="#a551ce" data-remaining-line-color="rgba(200,200,200,0.4)"
                                data-line-width="10" data-rounded-line="true" className="center-block"></canvas>
                                <div data-sparkline="" data-bar-color="#a551ce" data-height="30" data-bar-width="8" data-bar-spacing="2" data-values="5,4,8,7,9,4,6,3,4,7,5,4,7" className="text-center"></div>
                            </div>
                            <div className="panel-footer">
                                <p className="text-muted">
                                    <span className="text-dark"><h4>$2934</h4></span>
                                </p>
                            </div>
                        </div>                       
                    </Col>
                     <Col sm={ 3 } xs={ 12 } className="text-center">
                        
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <a href="#" className="text-muted pull-right">
                                    <em className="fa fa-arrow-right"></em>
                                </a>
                                <div className="text-info">Yesterday</div>
                                <canvas data-classyloader="" data-percentage="43" data-speed="20" data-font-size="40px" data-diameter="60" data-line-color="#23b7e5" data-remaining-line-color="rgba(200,200,200,0.4)"
                                data-line-width="10" data-rounded-line="true" className="center-block"></canvas>
                                <div data-sparkline="" data-bar-color="#23b7e5" data-height="30" data-bar-width="5" data-bar-spacing="2" data-values="5,4,8,7,8,5,4,6,5,5,9,4,6,3,4,7,5,4,7" className="text-center"></div>
                            </div>
                            <div className="panel-footer">
                                <p className="text-muted">
                                
                                   <span className="text-dark"><h4>$3934</h4></span>
                                </p>
                            </div>
                        </div>                       
                    </Col>
                     <Col sm={ 3 } xs={ 12 } className="text-center">
                        
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <a href="#" className="text-muted pull-right">
                                    <em className="fa fa-arrow-right"></em>
                                </a>
                                <div className="text-info">7 Day</div>
                                <canvas data-classyloader="" data-percentage="38" data-speed="20" data-font-size="40px" data-diameter="70" data-line-color="#ff902b" data-remaining-line-color="rgba(200,200,200,0.4)"
                                data-line-width="10" data-rounded-line="true" className="center-block"></canvas>
                                <div data-sparkline="" data-bar-color="#ff902b" data-height="30" data-bar-width="8" data-bar-spacing="2" data-values="5,4,8,7,8,5,4" className="text-center"></div>
                            </div>
                            <div className="panel-footer">
                                <p className="text-muted">
                                   
                                    <span className="text-dark"><h4>$20875</h4></span>
                                </p>
                            </div>
                        </div>                       
                    </Col>
                     <Col sm={ 3 } xs={ 12 } className="text-center">
                        
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <a href="#" className="text-muted pull-right">
                                    <em className="fa fa-arrow-right"></em>
                                </a>
                                <div className="text-info">30 Days</div>
                                <canvas data-classyloader="" data-percentage="29" data-speed="20" data-font-size="40px" data-diameter="60" data-line-color="#7266ba" data-remaining-line-color="rgba(200,200,200,0.4)"
                                data-line-width="10" data-rounded-line="true" className="center-block"></canvas>
                                <div data-sparkline="" data-bar-color="#a551ce" data-height="30" data-bar-width="5" data-bar-spacing="2" data-values="5,4,8,7,4,5,4,9,5,3,9,4,6,8" className="text-center"></div>
                            </div>
                            <div className="panel-footer">
                                <p className="text-muted">
                                    
                                    <span className="text-dark"><h4>$102934</h4></span>
                                </p>
                            </div>
                        </div>                       
                    </Col>
                    { /* END loader widget*/ }
                    </Row>
                <Row>
                    <Col lg={ 4 }>
                        { /* START List group */ }
                        <ul className="list-group">
                            <li className="list-group-item">
                                <Row className="row-table pv-lg">
                                    <Col xs={ 6 }>
                                        <p className="m0 lead">1204</p>
                                        <p className="m0">
                                            <large>Orders</large>
                                        </p>
                                    </Col>
                                    <Col xs={ 6 } className="text-center">
                                        <div data-sparkline="" data-bar-color="#a551ce" data-height="60" data-bar-width="10" data-bar-spacing="6" data-chart-range-min="0" data-values="3,6,7,8,4,5"></div>
                                    </Col>
                                </Row>
                            </li>
                            <li className="list-group-item">
                                <Row className="row-table pv-lg">
                                    <Col xs={ 6 }>
                                        <p className="m0 lead">$ 30,200.00</p>
                                        <p className="m0">
                                             <large>3 Month Average</large>
                                        </p>
                                    </Col>
                                    <Col xs={ 6 } className="text-center">
                                        <div data-sparkline="" data-type="line" data-height="60" data-width="80%" data-line-width="2" data-line-color="#7266ba" data-chart-range-min="0" data-spot-color="#888"
                                        data-min-spot-color="#7266ba" data-max-spot-color="#7266ba" data-fill-color="" data-highlight-line-color="#fff" data-spot-radius="3"
                                        data-values="7,3,4,7,5,9,4,4,7,5,9,6,4" data-resize="true"></div>
                                    </Col>
                                </Row>
                            </li>
                            <li className="list-group-item">
                                <Row className="row-table pv-lg">
                                    <Col xs={ 6 }>
                                        <p className="m0 lead">367</p>
                                        <p className="m0">
                                             <large>New Customers</large>
                                        </p>
                                    </Col>
                                    <Col xs={ 6 }>
                                        <ul className="list-inline text-center">
                                            <li>
                                                <OverlayTrigger placement="top" overlay={tooltip('Katie')}>
                                                    <img src="img/user/02.jpg" alt="Follower" className="img-responsive img-circle thumb24" />
                                                </OverlayTrigger>
                                            </li>
                                            <li>
                                                <OverlayTrigger placement="top" overlay={tooltip("Cody")}>
                                                    <img src="img/user/01.jpg" alt="Follower" className="img-responsive img-circle thumb24" />
                                                </OverlayTrigger>
                                            </li>
                                            <li>
                                                <OverlayTrigger placement="top" overlay={tooltip("Tamara")}>
                                                    <img src="img/user/03.jpg" alt="Follower" className="img-responsive img-circle thumb24" />
                                                </OverlayTrigger>
                                            </li>
                                            <li>
                                                <OverlayTrigger placement="top" overlay={tooltip("Gene")}>
                                                    <img src="img/user/04.jpg" alt="Follower" className="img-responsive img-circle thumb24" />
                                                </OverlayTrigger>
                                            </li>
                                            <li>
                                                <OverlayTrigger placement="top" overlay={tooltip("Marsha")}>
                                                    <img src="img/user/04.jpg" alt="Follower" className="img-responsive img-circle thumb24" />
                                                </OverlayTrigger>
                                            </li>
                                            <li>
                                                <OverlayTrigger placement="top" overlay={tooltip("Robin")}>
                                                    <img src="img/user/09.jpg" alt="Follower" className="img-responsive img-circle thumb24" />
                                                </OverlayTrigger>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </li>
                        </ul>
                        { /* END List group */ }
                    </Col>
                    <Col lg={ 8 }>
                       <div className="panel panel-transparent">
                            <div data-vector-map="" data-height="450" data-scale='0' data-map-name="world_mill_en"></div>
                        </div>
                    </Col>
                </Row>
                <div className="unwrap mv-lg">
                    { /* START chart */ }
                 
                    { /* END chart */ } 
                </div>
                
                { /* START radial charts */ }
                <Row className="mb-lg">
                    <Col sm={ 3 } xs={ 6 } className="text-center">
                        <p>Current Project</p>
                        <canvas data-classyloader="" data-height="150px" data-diameter="60" data-font-size="25px" data-percentage="60" data-speed="30" data-line-color="#23b7e5" data-remaining-line-color="#edf2f6"
                        data-line-width="2"></canvas>
                    </Col>
                    <Col sm={ 3 } xs={ 6 } className="text-center">
                        <p>Current Progress</p>
                        <canvas data-classyloader="" data-height="150px" data-diameter="60" data-font-size="25px" data-percentage="30" data-speed="30" data-line-color="#f532e5" data-remaining-line-color="#edf2f6"
                        data-line-width="2"></canvas>
                    </Col>
                    <Col sm={ 3 } xs={ 6 } className="text-center">
                        <p>Space Usage</p>
                        <canvas data-classyloader="" data-height="150px" data-diameter="60" data-font-size="25px" data-percentage="50" data-speed="30" data-line-color="#7266ba" data-remaining-line-color="#edf2f6"
                        data-line-width="2"></canvas>
                    </Col>
                    <Col sm={ 3 } xs={ 6 } className="text-center">
                        <p>Interactions</p>
                        <canvas data-classyloader="" data-height="150px" data-diameter="60" data-font-size="25px" data-percentage="75" data-speed="30" data-line-color="#ff902b" data-remaining-line-color="#edf2f6"
                        data-line-width="2"></canvas>
                    </Col>
                </Row>
                { /* START radial charts */ }
                { /* START Multiple List group */ }
                <div className="list-group">
                    <a href="#" className="list-group-item">
                        <table className="wd-wide">
                            <tbody>
                                <tr>
                                    <td className="wd-xs">
                                        <div className="ph">
                                            <img src="img/dummy.png" alt="" className="media-box-object img-responsive img-rounded thumb64" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="ph">
                                            <h4 className="media-box-heading">Project A</h4>
                                            <small className="text-muted">Vestibulum ante ipsum primis in faucibus orci</small>
                                        </div>
                                    </td>
                                    <td className="wd-sm hidden-xs hidden-sm">
                                        <div className="ph">
                                            <p className="m0">Last change</p>
                                            <small className="text-muted">4 weeks ago</small>
                                        </div>
                                    </td>
                                    <td className="wd-xs hidden-xs hidden-sm">
                                        <div className="ph">
                                            <p className="m0 text-muted">
                                                <em className="icon-users mr fa-lg"></em>26</p>
                                        </div>
                                    </td>
                                    <td className="wd-xs hidden-xs hidden-sm">
                                        <div className="ph">
                                            <p className="m0 text-muted">
                                                <em className="icon-doc mr fa-lg"></em>3500</p>
                                        </div>
                                    </td>
                                    <td className="wd-sm">
                                        <div className="ph">
                                            <progressbar value="80" type="success" className="m0 progress-xs">80%</progressbar>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </a>
                </div>
                <div className="list-group">
                    <a href="#" className="list-group-item">
                        <table className="wd-wide">
                            <tbody>
                                <tr>
                                    <td className="wd-xs">
                                        <div className="ph">
                                            <img src="img/dummy.png" alt="" className="media-box-object img-responsive img-rounded thumb64" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="ph">
                                            <h4 className="media-box-heading">Project X</h4>
                                            <small className="text-muted">Vestibulum ante ipsum primis in faucibus orci</small>
                                        </div>
                                    </td>
                                    <td className="wd-sm hidden-xs hidden-sm">
                                        <div className="ph">
                                            <p className="m0">Last change</p>
                                            <small className="text-muted">Today at 06:23 am</small>
                                        </div>
                                    </td>
                                    <td className="wd-xs hidden-xs hidden-sm">
                                        <div className="ph">
                                            <p className="m0 text-muted">
                                                <em className="icon-users mr fa-lg"></em>3</p>
                                        </div>
                                    </td>
                                    <td className="wd-xs hidden-xs hidden-sm">
                                        <div className="ph">
                                            <p className="m0 text-muted">
                                                <em className="icon-doc mr fa-lg"></em>150</p>
                                        </div>
                                    </td>
                                    <td className="wd-sm">
                                        <div className="ph">
                                            <progressbar value="50" type="purple" className="m0 progress-xs">50%</progressbar>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </a>
                </div>
                <div className="list-group">
                    <a href="#" className="list-group-item">
                        <table className="wd-wide">
                            <tbody>
                                <tr>
                                    <td className="wd-xs">
                                        <div className="ph">
                                            <img src="img/dummy.png" alt="" className="media-box-object img-responsive img-rounded thumb64" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="ph">
                                            <h4 className="media-box-heading">Project Z</h4>
                                            <small className="text-muted">Vestibulum ante ipsum primis in faucibus orci</small>
                                        </div>
                                    </td>
                                    <td className="wd-sm hidden-xs hidden-sm">
                                        <div className="ph">
                                            <p className="m0">Last change</p>
                                            <small className="text-muted">Yesterday at 10:20 pm</small>
                                        </div>
                                    </td>
                                    <td className="wd-xs hidden-xs hidden-sm">
                                        <div className="ph">
                                            <p className="m0 text-muted">
                                                <em className="icon-users mr fa-lg"></em>15</p>
                                        </div>
                                    </td>
                                    <td className="wd-xs hidden-xs hidden-sm">
                                        <div className="ph">
                                            <p className="m0 text-muted">
                                                <em className="icon-doc mr fa-lg"></em>480</p>
                                        </div>
                                    </td>
                                    <td className="wd-sm">
                                        <div className="ph">
                                            <progressbar value="20" type="green" className="m0 progress-xs">20%</progressbar>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </a>
                    { /* END dashboard main content */ }
                </div>
                { /* END Multiple List group */ }
            </ContentWrapper>
            );
    }

}

export default DashboardV2;
