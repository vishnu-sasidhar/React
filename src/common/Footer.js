import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FooterLogo from "../assets/images/logo1.svg"




function Footer(){
    return(
        <React.Fragment>
    <footer>
        <Container>
            <div class="footer-wrap">
                <div class="frst-ftr">
                <Row>
                    <Col lg="6">
                        <div className="footer-logo">
                            <img src={FooterLogo} alt="" />
                        </div>
                        <div className="quick-links quick-links-scnd">
                                 <ul>
                                     <li><a href="">About Us</a></li>
                                     <li><a href="contact.php">Contact Us</a></li>
                                 </ul>
                             </div>
                    </Col>
                  
                    <Col lg="6">
                        <div className="social-links">
                            <ul>
                                <li><a href=""><iconify-icon icon="bxl:facebook"></iconify-icon></a></li>
                                <li> <a href=""><iconify-icon icon="bxl:instagram-alt"></iconify-icon></a></li>
                                <li><a href=""><iconify-icon icon="bxl:linkedin"></iconify-icon></a></li>
                                <li> <a href=""><iconify-icon icon="bxl:youtube"></iconify-icon></a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                </div>
                 <hr className="footer-line" />
                 <div className="copy-right">
                     <Row>
                         <Col lg="9">
                             <div className="wrap01">
                                 <p> @2022 wewoo. All Rights Reserved.</p>
                                 <p>Developed by <a href="https://www.crantia.com/" target="_blank">Crantia Technologies</a></p>
                             </div>
                             <div className="wrap02">
                                 <a href="terms&conditions.php">Terms & Conditions</a>
                                 <a href="privacy_policy.php">Privacy Policy</a>
                             </div>
                         </Col>
                         <Col lg="3">
                             <div className="quick-links quick-links-frst">
                                 <ul>
                                     <li><a href="">About Us</a></li>
                                     <li><a href="contact.php">Contact Us</a></li>
                                 </ul>
                             </div>
                         </Col>
                     </Row>
                 </div>
            </div>
        </Container>
    </footer> 
        </React.Fragment>
    );
}

export default Footer;