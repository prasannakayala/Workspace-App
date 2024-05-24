import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './ChooseContainer.css'
import star from '../../assets/logos/star.jpg'
import gym from '../../assets/logos/gymlogo.jpg'
import wifi from '../../assets/logos/wifilogo.jpg'
import cafe from '../../assets/logos/cafelogo.jpg'
import affordable from '../../assets/logos/affordable.jpg'
import comfort from '../../assets/logos/comfort.jpg';
import quick from '../../assets/logos/booking.jpg';
import sports from '../../assets/logos/sports.jpg'

const ChooseContainer:React.FC = () => {
  return (
    <section >
        <Container className='choose-innercontainer'>
            <Row>
                <h3 className='choose-heading mb-3'>Why Choose us?</h3>
            </Row>
            <Container className='chooseitemscontainer'>
            <Row>
                <Col xs={12} sm={6} md={3}>
                    <div className='d-flex choose-containers'>
                        <div className="community">
                    <img src={star} alt="star" className='star'/>
                    </div>
                    <p className='choose-name'>Community Events</p>
                    </div>
                </Col>
                <Col  xs={12} sm={6} md={3}>
                    <div className='d-flex choose-containers'>
                        
                    <img src={gym} alt="star" className='icon'/>
                    
                    <p className='choose-name'>Gym Facilities</p>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3}>
                    <div className='d-flex choose-containers'>
                        
                    <img src={wifi} alt="star" className='icon'/>
                    
                    <p className='choose-name'>High-Speed WiFi</p>
                    </div>
                </Col>
                <Col  xs={12} sm={6} md={3}>
                    <div className='d-flex choose-containers'>
                        
                    <img src={cafe} alt="star" className='icon'/>
                    
                    <p className='choose-name'>Cafe & Tea Bar</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={6} md={3}>
                    <div className='d-flex choose-containers'>
                        
                    <img src={affordable} alt="star" className='icon'/>
                    
                    <p className='choose-name'>Affordable</p>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3}>
                    <div className='d-flex choose-containers'>
                        
                    <img src={comfort} alt="star" className='icon'/>
                    
                    <p className='choose-name'>Comfort Lounges</p>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3}>
                    <div className='d-flex choose-containers'>
                        
                    <img src={quick} alt="star" className='icon'/>
                    
                    <p className='choose-name'>Quick Booking</p>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3}>
                    <div className='d-flex choose-containers'>
                        
                    <img src={sports} alt="star" className='icon'/>
                    
                    <p className='choose-name'>Sports Area</p>
                    </div>
                </Col>
            </Row>
            </Container>
        </Container>
    </section>
  )
}

export default ChooseContainer