import React from "react";
import CommonHeader from "../common/InnerHeader";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutImage from "../assets/images/about.jpg";
import AboutIconList from "../components/AboutIcons";
import Navbar from "../common/Header";
import Footer from "../common/Footer";


function AboutPage(){
    return(
        <React.Fragment>
          <Navbar/>
            <CommonHeader Name="About" Value="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />


<section id="about_section" data-aos="fade-up"
     data-aos-duration="3000">
  <Container>
    <Row>
      <Col lg="6">
        <div class="about_content_wrapper">
          <div>
            <h2 class="sub-heading">who <span class="head-span">we </span>are</h2>
          <div class="common_paragraph">
            <p>Challenges of traditional dating force more and more people to look for soul mates in the cyberspace. In fact, online dating has radically changed the way lonely hearts meet each other today. One of its advantages is a possibility to remove the location barrier, which allows singles to expand the scope of their search.</p>

            <p>We all know that true love finds itself, but the world is so spacious that you may miss a rare chance to encounter your one and only in the daily life. What’s more, most loners are too shy to approach the person they cherish warm feelings for. This is when a dating site comes in handy, as it allows comfortable communication by exchanging letters or via live chats.</p>

            <p>We all know that true love finds itself, but the world is so spacious that you may miss a rare chance to encounter your one and only in the daily life.</p>
          </div>
          </div>
        </div>
      </Col>
      <Col lg="6">
        <div class="about_image_wrapper">
          <img src={AboutImage} alt="" />
        </div>
      </Col>
    </Row>
  </Container>
</section>

<section id="what_we_offer" data-aos="fade-up"
     data-aos-duration="3000">
  <Container>
    <div className="about_head">
      <h2 className="sub-heading">What <span class="head-span">we</span> offer</h2>
    </div>
    <Row>
      <AboutIconList/>
    </Row>
  </Container>
</section>

<section id="about_banner">
  <Container>
    <div class="about_banner_content">
      <h5>Challenges of traditional dating Join</h5>
       <button class="register-btn">join now</button>
    </div>
  </Container>
</section>

<Footer/>



        
        </React.Fragment>
    );
}

export default AboutPage;