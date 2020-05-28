import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import home_banner from './../assets/banner/home_banner.jpg'; // with import
import ourFavorites_banner from './../assets/banner/ourFavorites_banner.jpg'; // with import
import paintings_banner from './../assets/banner/paintings_banner.jpg';
import props_banner from './../assets/banner/props_banner.jpg';
import { Button } from 'react-bootstrap'
import '../assets/stylesheets/home.css'

export default class Home extends Component {
    // constructor(props) {
    //     super(props);
    // }


    render() {
        return (
            <Row>
                <Row>
                    <Col lg={12}>
                        <div className='homeBanner'><img className='homeBannerImg' src={home_banner} alt='Home banner'></img></div>
                        <div className='bannerHover'>
                            <div className='bannerHoverTitle'><span>Health starts here</span></div>
                            <div className='bannerHoverSubtitle'><span>Paper Redefined</span></div>
                            <div className='bannerHoverButtonDiv'><Button className='bannerHoverButton' variant="dark">Shop All</Button>{' '}</div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Row>
                        <Col lg={12}>
                            <div className='ourFavoritesHeader'>
                                <span>WHY HOMEOPATHY</span>
                            </div>
                        </Col>
                    </Row>

{/* Collection 1 Information */}
                    <Row className='collOneRow'>
                        <Col lg={6} className='collOneColumn'>
                            <div className='collOneColumnTitle'>
                                <span>Common Acute Ailments</span>
                            </div>
                            <div className='collOneColumnSubTitle'>
                                <span>Homeopathy is very effective in helping the body move through an acute illness faster if not eliminating it before it takes hold of the body. Acute illnesses such as colds, flus, ear infections, sore throats, upset stomachs, sprains, fractures, and even broken bones are some examples of what can be helped with a  homeopathic remedy.</span>
                            </div>
                            {/* <div>
                                <div className='collOneColumnButtonDiv'><Button className='collOneColumnButton' variant="dark">Shop Invitatios</Button>{' '}</div>
                            </div> */}
                        </Col>
                        <Col lg={6} >
                            <div className='collOneColumnBanner'><img className='collOneColumnBannerImage' src={ourFavorites_banner} alt='Wedding Invitation collection'></img></div>
                        </Col>
                    </Row>

{/* Collection 2 Information */}
                    <Row className='collTwoRow'>
                        <Col lg={6} className='collTwoColBannerWrapper'>
                            <div className='collTwoColBanner'><img className='collTwoColBannerImage' src={paintings_banner} alt='Wedding Invitation collection'></img></div>
                        </Col>

                        <Col lg={6} className='collTwoCol'>
                            <div className='collTwoColTitle'>
                                <span>Drug free</span>
                            </div>
                            <div className='collTwoColSubTitle'>
                                <span>All homeopathic remedies are made from natural substances. They are non-addicting and have no side effects. Remedies are safe to use for everyone, from babies to the elderly. Homeopathy can improve your health to the point that you may be able to eliminate medication, with doctor's approval.</span>
                            </div>
                            {/* <div>
                                <div className='collTwoColButtonDiv'><Button className='collTwoColButton' variant="dark">Shop Gifts</Button>{' '}</div>
                            </div> */}
                        </Col>
                    </Row>

{/* Collection 3 Information */}
                    <Row className='collOneRow'>
                        <Col lg={6} className='collOneColumn'>
                            <div className='collOneColumnTitle'>
                                <span>FDA approved</span>
                            </div>
                            <div className='collOneColumnSubTitle'>
                                <span>All homeopathic remedies are manufactured in FDA approved pharmacies. All homeopathic remedies are FDA approved</span>
                            </div>
                            {/* <div>
                                <div className='collOneColumnButtonDiv'><Button className='collOneColumnButton' variant="dark">Shop Backdrops</Button>{' '}</div>
                            </div> */}
                        </Col>
                        <Col lg={6}>
                            <div className='collOneColumnBanner'><img className='collOneColumnBannerImage' src={props_banner} alt='Wedding Invitation collection'></img></div>
                        </Col>
                    </Row>
                </Row>

                <Row>
                    <Row>
                        <Col lg={12}>
                            <div className='ourFavoritesHeader'>
                                <span>HOW WE HELP</span>
                            </div>
                        </Col>
                    </Row>

{/* Collection 1 Information */}
                    <Row className='collOneRow'>
                        <Col lg={6} className='collOneColumn'>
                            <div className='collOneColumnTitle'>
                                <span>Chronic Pain Relief</span>
                            </div>
                            <div className='collOneColumnSubTitle'>
                                <span>Millions of individuals suffer from chronic painful conditions. The best treatment option depends on your individual needs. Different types of pain require different treatment options. The right treatment can help you find relief. Dr. Shepherd offers individualized treatment plans to treat a wide variety of chronic pain care needs.</span>
                            </div>
                            {/* <div>
                                <div className='collOneColumnButtonDiv'><Button className='collOneColumnButton' variant="dark">Shop Invitatios</Button>{' '}</div>
                            </div> */}
                        </Col>
                        <Col lg={6} >
                            <div className='collOneColumnBanner'><img className='collOneColumnBannerImage' src={ourFavorites_banner} alt='Wedding Invitation collection'></img></div>
                        </Col>
                    </Row>

{/* Collection 2 Information */}
                    <Row className='collTwoRow'>
                        <Col lg={6} className='collTwoColBannerWrapper'>
                            <div className='collTwoColBanner'><img className='collTwoColBannerImage' src={paintings_banner} alt='Wedding Invitation collection'></img></div>
                        </Col>

                        <Col lg={6} className='collTwoCol'>
                            <div className='collTwoColTitle'>
                                <span>Treatment Options</span>
                            </div>
                            <div className='collTwoColSubTitle'>
                                <span>Dr. Shepherd has over 43 years of experience in helping patients feel better. Dr. Shepherd practices a unique form of medicine offering integrative, natural, traditional and holistic approaches for fast pain relief.  Dr. Shepherd utilizes the techniques that he developed called QuantumTide Osteopathy℠ Quantum Tide Hypnosis℠ and  QuantumTide Breathwork℠ to restore function quickly. He combines Osteopathic Manipulative Medicine, Cranial Sacral Manipulation, Cognitive Skills Restructuring, exercises for Neuromuscular Re-education, Homeopathy and Acupuncture to provide a variety of treatment options to help you feel better quickly.</span>
                            </div>
                            {/* <div>
                                <div className='collTwoColButtonDiv'><Button className='collTwoColButton' variant="dark">Shop Gifts</Button>{' '}</div>
                            </div> */}
                        </Col>
                    </Row>

{/* Collection 3 Information */}
                    <Row className='collOneRow'>
                        <Col lg={6} className='collOneColumn'>
                            <div className='collOneColumnTitle'>
                                <span>Chronic and Acute Issues</span>
                            </div>
                            <div className='collOneColumnSubTitle'>
                                <span>Pain is a signal from our body that something is not right.  Dr. Shepherd has a wealth of experience when it comes to pain management and treating a wide range of chronic and acute conditions. Dr. Shepherd offers manual Osteopathic techniques, including spinal manipulation, joint articulation, soft tissue massage and cranial sacral osteopathy. In addition, Dr. Shepherd offers homeopathy and medical acupuncture aiding your recovery to a pain-free life.</span>
                            </div>
                            {/* <div>
                                <div className='collOneColumnButtonDiv'><Button className='collOneColumnButton' variant="dark">Shop Backdrops</Button>{' '}</div>
                            </div> */}
                        </Col>
                        <Col lg={6}>
                            <div className='collOneColumnBanner'><img className='collOneColumnBannerImage' src={props_banner} alt='Wedding Invitation collection'></img></div>
                        </Col>
                    </Row>
                </Row>


            </Row>
        )
    }
}