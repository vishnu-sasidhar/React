import React from "react";
import Col from 'react-bootstrap/Col';
 
const list = [
    {
      name: 'Search online for free',
      caption:'Getting started on the DatingRoom dating site is easy, simply register, create a profile and you can browse the dating profiles of your potential matches for free.',
      icon: <iconify-icon icon="bi:search-heart-fill"></iconify-icon>,
     
    },
    {
      name: 'Dating at your own pace',
      caption:'As a subscriber to online dating with Dating Room you will have your own dedicated match email inbox.',
      icon: <iconify-icon icon="fluent-mdl2:commitments"></iconify-icon>,
    },
    {
        name: 'Dating Advice to help you',
        caption:'Whether you’re completely new to online dating, or are getting back onto the dating scene after a break, there are a few things you should bear in mind before getting started.',
        icon: <iconify-icon icon="game-icons:love-mystery"></iconify-icon>,
      },
  ];
  
  const AboutIconList = () => (
    <React.Fragment>
    {list.map(item => (
        <Col lg="4">
          <div class="we_offers">
            <div class="icon">
            {item.icon}
            </div>
            <h5>{item.name}</h5>
            <div class="common_paragraph">
              <p>{item.caption}</p>
            </div>
          </div>
        </Col>
        ))}
    </React.Fragment>
  );


export default AboutIconList;