import React from "react";
import CommonHeader from "../common/InnerHeader";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NormalInput, NormalTextarea } from "../components/NormalForm";
import Navbar from "../common/Header";
import Footer from "../common/Footer";

function ContactPage(){
    return(
        <React.Fragment>
          <Navbar/>
          <CommonHeader Name="Contact Us" Value="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />  
        
          <section id="contact_section">
  <Container>
    <Row>
      <Col lg="7">
        <div class="contact_form_wrap">
          <h3 class="contact_form_head">
            fill the form its easy.
          </h3>
          <div class="contact_form">
            <form>
              <Row>
                <Col lg="6">
                 <NormalInput type="text" placeholder="First Name" />
                </Col>
                 <Col lg="6">
                 <NormalInput type="text" placeholder="Last Name" />
                </Col>
                 <Col lg="12">
                 <NormalInput type="email" placeholder="Email" />
                </Col>
                <Col lg="12">
                  <NormalTextarea placeholder="Message"/>
                </Col>
                <Col lg="12">
                <input type="submit" name="" value="Send" class="contact_btn"/>
                </Col>
              </Row>
             
            </form>
          </div>
        </div>
      </Col>
      <Col lg="5">
        <div class="contact_text">
          <div>
            <h4 class="contact_text_head">Need Help?</h4>
           <div class="common_paragraph">
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
           </div>
           <div class="contact_social_media">
             <ul>
               <li>
                 <a href=""><iconify-icon icon="bxl:facebook"></iconify-icon></a>
               </li>
                <li>
                 <a href=""><iconify-icon icon="bxl:instagram-alt"></iconify-icon></a>
               </li>
                <li>
                 <a href=""><iconify-icon icon="bxl:linkedin"></iconify-icon></a>
               </li>
                <li>
                 <a href=""><iconify-icon icon="bxl:youtube"></iconify-icon></a>
               </li>
             </ul>
           </div>
          </div> 
        </div>
      </Col>
    </Row>
  </Container>
</section>
        <Footer/>
        </React.Fragment>
    )
}


export default ContactPage;