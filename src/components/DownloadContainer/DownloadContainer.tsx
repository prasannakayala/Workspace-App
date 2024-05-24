import React from 'react';
import './DownloadContainer.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import phone1 from '../../assets/Frame 1.jpg';
import phone2 from '../../assets/Frame 2.jpg';
import googleplay from '../../assets/image 1938.jpg';
import appstore from '../../assets/image 1939.jpg';


const DownloadContainer = () => {
  return (
    <Container className='download-container'>
      <h6 className="download-text">Download our app now</h6>
      <Row className='download-row d-flex justify-content-between align-items-center'>
        <Col md={7} className='twoimages-col'>
          <div className='twoimages'>
            <img src={phone1} alt="phone1" className='phone1'/>
            <img src={phone2} alt="phone2" className='phone2'/>
          </div>
        </Col>
        
        <Col md={5} className='spancontainer d-flex flex-column align-items-start justify-content-center'>
          <span className='spandownload'>
            Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.
          </span>
          <Row className="mt-3 btnrow">
            <Col>
              <Button variant='dark' className='downloadbtn'>
                <img src={googleplay} alt="googlePlay" className='googleplay' />
              </Button>
            </Col>
            <Col>
              <Button variant='dark' className='downloadbtn'>
                <img src={appstore} alt="appstore" className='appstore' />
              </Button>
            </Col>
          </Row>
        </Col>
      
      </Row>
    </Container>
  );
};

export default DownloadContainer;
