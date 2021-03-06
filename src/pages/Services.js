import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Route, BrowserRouter } from 'react-router-dom';
import '../assets/stylesheets/services.css'
import phone_consultation from './../assets/banner/phone_consultation.jpg'
import initial_consultation from './../assets/banner/initial_consultation.jpg'
import followup_consultation from './../assets/banner/followup_consultation.png'
import PhoneConsultationService from './PhoneConsultation';
import InitialConsultationService from './InitialConsultation';
import FollowUpConsultationService from './FollowUpConsultation';

export default class Shipping extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Row className='shippingWrapper'>
                <Row>
                    <Col lg={12}>
                        <div className='shippingHeader'>
                            <span>
                                Services
                            </span>
                        </div>
                        <div className='shippingHeaderDescription'>
                            <span>
                                Below, you'll find some of the many services I offer. Payment is due at the time services are rendered.
                            </span>
                        </div>
                    </Col>
                </Row>

                <Row className="content">
                    <Route path="/phoneconsultationservice" component={PhoneConsultationService} />
                    <Route path="/initialconsultationservice" component={InitialConsultationService} />
                    <Route path="/followupconsultationservice" component={FollowUpConsultationService} />
                    {/* <Route path='/services' component={Services} />
                    <Route path='/forms' component={HealthForms} /> */}
                </Row>

                <Row className='rowFlex'>
                    <Col lg={12}>
                        <div className='shippingInfoSection'>
                            <Row className='rowFlex servicesInfoWrapper'>
                                <Col lg={8}>
                                    <div className='shippingTitle align-center-mobile'>
                                        <span><a href='/phoneconsultationservice'>15 Minute Phone Consultation</a></span>
                                    </div>
                                    <div className='shippingInformation align-center-mobile'>
                                        <span>The first step towards wellness</span>
                                    </div>
                                    <div className='shippingInformationButtonContainer'>
                                        <Button href='/phoneconsultationservice' className='shippingInformationHoverButton' variant="secondary">Read More...</Button>{' '}
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className='servicesIconContainer'>
                                        <img className='servicesIcon' src={phone_consultation}></img>
                                    </div>
                                </Col>
                            </Row>


                            <Row className='rowFlex servicesInfoWrapper'>
                                <Col lg={8}>
                                    <div className='shippingTitle align-center-mobile'>
                                        <a href='/initialconsultationservice'><span>Initial Consultation</span></a>
                                    </div>
                                    <div className='shippingInformation align-center-mobile'>
                                        <span>To restore the sick to health.</span>
                                    </div>
                                    <div className='shippingInformationButtonContainer'>
                                        <Button href='/initialconsultationservice' className='shippingInformationHoverButton' variant="secondary">Read More...</Button>{' '}
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className='servicesIconContainer'>
                                        <img className='servicesIcon' src={initial_consultation}></img>
                                    </div>
                                </Col>
                            </Row>


                            <Row className='rowFlex servicesInfoWrapper'>
                                <Col lg={8}>

                                    <div className='shippingTitle align-center-mobile'>
                                        <a href='/followupconsultationservice'><span>Follow Up Consultations</span></a>
                                    </div>
                                    <div className='shippingInformation align-center-mobile'>
                                        <span>Tell me how you're doing!.</span>
                                    </div>
                                    <div className='shippingInformationButtonContainer'>
                                        <Button href='/followupconsultationservice' className='shippingInformationHoverButton' variant="secondary">Read More...</Button>{' '}
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className='servicesIconContainer'>
                                        <img className='servicesIcon' src={followup_consultation}></img>
                                    </div>
                                </Col>
                            </Row>


                        </div>
                    </Col>
                </Row>
            </Row>
        )
    }
}