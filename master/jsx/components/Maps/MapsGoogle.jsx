import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Alert, Table } from 'react-bootstrap';
import MapsGoogleRun from './MapsGoogle.run';


class MapsGoogle extends React.Component {
    componentDidMount() {
        MapsGoogleRun();
    }
    render() {
        return (
            <ContentWrapper>
                <h3>Fulfillment
                   <small>You have 6 unfulfilled orders</small>
                </h3>
                <Row>
                <Col md={ 12 }>
                <Panel header="ORDERS IN PLAY">
                    <Table responsive hover bordered striped>
                        <thead>
                            <tr>
                                <th>Order #</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Tax</th>
                                <th className="text-center">Status</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="">Order #123</a>
                                </td>
                                <td>$ 100.00</td>
                                <td>5</td>
                                <td>21%</td>
                                <td className="text-center">
                                    <span className="label label-success">In Stock</span>
                                </td>
                                <td>$ 605.00</td>
                            </tr>
                            <tr>
                                <td><a href="">Order #123</a>
                                </td>
                                <td>$ 100.00</td>
                                <td>5</td>
                                <td>21%</td>
                                <td className="text-center">
                                    <span className="label label-success">In Stock</span>
                                </td>
                                <td>$ 605.00</td>
                            </tr>
                            <tr>
                                <td><a href="">Order #123</a>
                                </td>
                                <td>$ 100.00</td>
                                <td>5</td>
                                <td>21%</td>
                                <td className="text-center">
                                    <span className="label label-warning">N/A</span>
                                </td>
                                <td>$ 605.00</td>
                            </tr>
                            <tr>
                                <td><a href="">Order #123</a>
                                </td>
                                <td>$ 100.00</td>
                                <td>5</td>
                                <td>21%</td>
                                <td className="text-center">
                                    <span className="label label-danger">Out Stock</span>
                                </td>
                                <td>$ 605.00</td>
                            </tr>
                            <tr>
                                <td><a href="">Order #123</a>
                                </td>
                                <td>$ 100.00</td>
                                <td>5</td>
                                <td>21%</td>
                                <td className="text-center">
                                    <span className="label label-success">In Stock</span>
                                </td>
                                <td>$ 605.00</td>
                            </tr>
                        </tbody>
                    </Table>
                </Panel>
                </Col>
                   <Col md={ 12 }>
                        <Panel header="ORDER #3424 Current Location">
                            <div data-gmap="" data-address="276 N TUSTIN ST, ORANGE, CA 92867" data-maptype="ROADMAP" data-styled="data-styled" className="gmap"></div>
                        </Panel>
                    </Col>
                </Row>
                
            </ContentWrapper>
            );
    }

}

export default MapsGoogle;

