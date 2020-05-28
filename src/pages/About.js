import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../assets/stylesheets/about.css'
import '../index.css'
import about_person_banner from './../assets/banner/about_background_collage_banner.jpg';

export default class About extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Row className='aboutWrapper'>
                <Row>
                    <Col lg={12}>
                        <div className='aboutHeader'>
                            <span>
                                HOMEOPATHY AND ME
                            </span>
                        </div>
                    </Col>
                </Row>

                <Row className='rowFlex'>
                    <Col lg={6}>
                        <div className='aboutBanner'>
                        <img src={about_person_banner} alt='about banner'></img>
                        </div>
                        
                    </Col>
                    <Col lg={6}>
                        <div className='aboutTitle align-center-mobile'>
                            MEET SHABANA
                        </div>
                        <div className='aboutDescription align-center-mobile'>
                            My studies still continue. Even as a nurse I had always had my hand in natural medicine. When the kids would get sick, it wasn't Tylenol that I would grab but a homeopathic remedy which I found to work quicker and more effectively for the ailments at hand. Because I was able to take care of my own with remedies, I avoided many visits to the pediatrician. I have always had a special interest in the health and welfare of babies and children. Treating a child using a homeopathic remedy can truly assist in building a stronger immune system.
                        </div>
                        <div className='aboutDescription align-center-mobile'>
                            Aside from using homeopathy for the family; my 3 dogs, 3 cats, and a handful of chickens have all benefited from the use of  homeopathy. I found homeopathy to be the complete package for whatever the situation is. Along with improved health, homeopathy can make deep changes in a person. I am honored to be able to practice this art of medicine and I look forward in passing this  gift along to you!
                        </div>
                    </Col>
                </Row>

                <Row className='rowFlex'>
                    <Col lg={12} className='aboutInfoFullWidth'>

                        <div className='aboutTitle align-center-mobile'>
                            Nursing Background
                        </div>
                        <div className='aboutDescription align-center-mobile'>
                            I have always had a passion for aiding people and animals alike in a healthcare setting. I graduated from Shenandoah University in 1987 with my degree in nursing, and thus started my career in healthcare. I loved it! I worked in many different hospitals across New England, starting out in Boston and ending up in Maryland. As a float pool nurse I worked in a wide variety of  settings, my favorite area of specialty being the newborn nursery and Pediatrics. I had learned a lot about people and a lot about healthcare!
                        </div>
                    </Col>
                </Row>
            </Row>
        )
    }
}