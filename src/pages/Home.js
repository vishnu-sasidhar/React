import React from "react"

import { SelectField, RadioField, FormEmail, FormPassword } from '../common/Form'
import IconList from '../common/Home-Icon'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import icon1 from "../assets/images/icon1.svg";
import icon2 from "../assets/images/icon2.svg";
import icon3 from "../assets/images/icon3.svg";
import icon4 from "../assets/images/icon4.svg";
import CategoryItem from "../common/HomeCategory"
import CatFriend from "../assets/images/friend.jpg";
import CatPartner from "../assets/images/partner.jpg";
import CatTravel from "../assets/images/travel.jpg";
import HomeAccoidion from "../components/HomeAccordion"
import RegisterImage from "../assets/images/register.png";
import Navbar from "../common/Header";
import Footer from "../common/Footer";






function Home(){
    return(
        <div>
<Navbar/>            
<header id="header">
  <div className="header-image">
    <div class="header-content">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12">
            <div className="header-caption-wrap">
              <div className="text-start">
              <h1 className="main-head">We’re not just for dating anymore</h1>
              <p>Start meeting new people in your area! </p>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6" col="12">
            <div className="entry-form-wrap">
              <div className="form-wrap">
                <h3>Start <span class="head-span">Free</span> Today</h3>
                <form>
                  <Row>
                     <Col lg="12">
                    <SelectField/>
                    </Col>
                    <Col lg="12">
                      <label className="label-text">I'm looking for</label>
                      <RadioField/>
                    </Col>
                    <Col lg="12">
                      <FormEmail/>
                    </Col>
                    <Col lg="12">
                      <FormPassword placeholder="Create Your Password" />
                      <span className="form-text">By clicking below to register, you confirm that you agree to our Terms & Conditions and you have read and understood our Privacy Policy.</span>
                      <Button as="input" type="submit" value="join now" className='join-bth' />
                    </Col>
                  </Row>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
</header>
<section id="we-provide">
  <Container>
    <div className="common-sub-head">
      <h2 className="sub-heading">Our <span class="head-span">wehoo</span> helps millions find real love</h2>
    </div>
    <div className="list-wrap">
      <ul>
      <IconList Name="Join 10 MIllion + community" value="Find someone you click with" img={icon1}/>
      <IconList Name="Supportive Community" value="Join one our community" img={icon2}/>
      <IconList Name="Genuine Conversation" value="Make new friends & chat easily" img={icon3}/>
      <IconList Name="4.5 Stars On The Internet" value="Editor’s Choice 2022" img={icon4}/>
      </ul>
    </div>
  </Container>
</section>

<section id="whats-inside">
  <Container>
     <div className="common-sub-head common-sub-head02">
      <h2 className="sub-heading">What's inside?</h2>
    </div>
    <div className="topics">
      <Row>
       <CategoryItem Name="Find A Friend" Avatar={CatFriend} />
       <CategoryItem Name="Life Partner" Avatar={CatPartner} />
       <CategoryItem Name="Travel Buddy" Avatar={CatTravel} />
      </Row>
    </div>
  </Container>
</section>

<section id="about-section">
  <Container>
    <Row>
      <Col lg="3">
        <div className="about-head">
          <h3>find real connection</h3>
        </div>
      </Col>
      <Col lg="9">
        <div className="about-content common-paragraph text-start">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat vitae turpis iaculis placerat. Praesent mollis libero eget luctus vulputate. Vestibulum et turpis ut sapien malesuada laoreet ut in felis. Nulla hendrerit, nunc in convallis interdum, ipsum nulla maximus neque, ut tempus urna dui venenatis erat. Mauris ex leo, rhoncus sed blandit id, tristique id lectus. Praesent varius, enim non rutrum hendrerit, lacus magna sagittis ante, id pharetra felis nibh a arcu.</p>
          <a href="" className="common-btn">our story</a>
        </div>
      </Col>
    </Row>
  </Container>
</section>

<section id="enquiry-section">
  <Container>
    <div className="enquiry-wrapper">
      <h3 className="sub-heading">Make the First Move</h3>
      <p>Women talk first to set an equal tone from the start.</p>
       <a href="" className="common-btn">let’s begin</a>
    </div>
  </Container> 
</section>


<section id="questions">
  <Container>
    <div className="questions-wrapper">
      <div className="border-box">
        <div className="question-head">
          <iconify-icon icon="bi:question-circle-fill"></iconify-icon>
          <h4>Frequently Asked Questions</h4>
        </div>
        <HomeAccoidion/>
      </div>
    </div>
  </Container>
</section>

<section id="register">
  <Container>
    <div className="register-wrapper" data-aos="fade-up"
     data-aos-duration="2000">
      <Row>
        <Col lg="5">
          <div className="register-image">
            <img src={RegisterImage} alt="" />
          </div>
        </Col>
        <Col lg="7">
          <div className="register-content text-start">
            <h2 className="sub-heading">We’re Here For <span class="head-span">YOU,</span></h2>
            <div className="common-paragraph">
              <p>Signing up for Wewoo is the first step in finding your next great relationship. From profile tips to sharing your success story, we are here to support you in your journey for love</p>
              <button className="register-btn">register now</button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </Container>
</section>
 <Footer/>

</div>
    );
}



export default Home;