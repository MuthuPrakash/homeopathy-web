import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import '../assets/stylesheets/contact.css'

export default class ContactUs extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Row className='contactWrapper'>
                <Row>
                    <Col lg={12}>
                        <div className='contactHeader'>
                            <span>
                                Let's Talk
                            </span>
                        </div>
                    </Col>
                </Row>

                <Row className='rowFlex'>
                    <Col lg={5}>
                        <div className='contactInfoSection'>
                            <div className='contactDescription align-center-mobile'>
                            Call for a free 15 minute phone consultation with Dr. Shabana for new patients. Find out how Dr. Shabana Babulal can help you
                        </div>
                            <div className='contactTitle align-center-mobile'>
                                Dr. Shabana Babulal
                        </div>
                            <div className='contactInformation align-center-mobile'>
                                <span>Tel: 1234567890</span>
                            </div>
                            <div className='contactInformation align-center-mobile'>
                                <span>Email: info@drshabana.com</span>
                            </div>
                            <div className='contactInformation align-center-mobile'>
                                <span>2550 Chain bridge loop, Vienna, VA</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className='contactFeedbackSection'>
                            <Form>
                                <Form.Group controlId="formGroupFullName">
                                    <Form.Label>Enter Your Name*</Form.Label>
                                    <Form.Control required type="text" placeholder="Full Name" />
                                </Form.Group>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label>Enter Your Email*</Form.Label>
                                    <Form.Control required type="email" placeholder="Email Address" />
                                </Form.Group>
                                <Form.Group controlId="formGroupPhone">
                                    <Form.Label>Enter Your Phone</Form.Label>
                                    <Form.Control type="text" placeholder="Phone Number" />
                                </Form.Group>
                                <Form.Group controlId="formGroupMessage">
                                    <Form.Label>Enter Your Message*</Form.Label>
                                    <Form.Control required as="textarea" rows="3" placeholder="Write your request" />
                                </Form.Group>
                                <div className='contactFeedbackButtonWrapper'>
                                    <Button variant="primary" type="submit" className='contactFeedbackButton' variant="dark">
                                        SUBMIT
                                    </Button>
                                </div>

                            </Form>
                        </div>

                    </Col>
                </Row>
            </Row>
        )
    }
}