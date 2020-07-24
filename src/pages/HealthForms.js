import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../assets/stylesheets/healthforms.css'
import pdf_file from './../data/files/sample.pdf';

export default class StorePolicy extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Row className='storePolicyWrapper'>
                <Row>
                    <Col lg={12}>
                        <div className='storePolicyHeader'>
                            <span>
                                Health Forms
                            </span>
                        </div>
                        <div className='storePolicyHeaderDescription'>
                            <span>
                                Please fill out the following paperwork after booking your appointment.
                            </span>
                        </div>
                    </Col>
                </Row>

                <Row className='rowFlex'>
                            <Col lg={4}>
                                <div className='storePolicyTitle align-center-mobile'>
                                    <span>Consent Form</span>
                                </div>
                                <div className='storePolicyInformation align-center-mobile'>
                                    <a href={pdf_file} target='_blank'><img src='https://static.wixstatic.com/media/530aa01d8faf4d58a3e08e8a24c32836.png/v1/fill/w_80,h_132,al_c,q_85,usm_0.66_1.00_0.01/530aa01d8faf4d58a3e08e8a24c32836.webp'></img></a>
                                </div>
                            </Col>


                            <Col lg={4}>
                                <div className='storePolicyTitle align-center-mobile'>
                                    <span>Child Intake form</span>
                                </div>
                                <div className='storePolicyInformation align-center-mobile'>
                                    <a href={pdf_file} target='_blank'><img src='https://static.wixstatic.com/media/530aa01d8faf4d58a3e08e8a24c32836.png/v1/fill/w_80,h_132,al_c,q_85,usm_0.66_1.00_0.01/530aa01d8faf4d58a3e08e8a24c32836.webp'></img></a>
                                </div>
                            </Col>


                            <Col lg={4}>
                                <div className='storePolicyTitle align-center-mobile'>
                                    <span>Adult Intake form</span>
                                </div>
                                <div className='storePolicyInformation align-center-mobile'>
                                    <a href={pdf_file} target='_blank'><img src='https://static.wixstatic.com/media/530aa01d8faf4d58a3e08e8a24c32836.png/v1/fill/w_80,h_132,al_c,q_85,usm_0.66_1.00_0.01/530aa01d8faf4d58a3e08e8a24c32836.webp'></img></a>
                                </div>
                            </Col>
                </Row>
            </Row>
        )
    }
}