import React from "react";
import Accordion from 'react-bootstrap/Accordion';



function HomeAccoidion() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="accordion_head">How to register on Wewoo?</Accordion.Header>
        <Accordion.Body>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat vitae turpis iaculis 
        placerat. Praesent mollis libero eget luctus vulputate. Vestibulum et turpis ut sapien malesuada 
        laoreet ut in felis. Nulla hendrerit, nunc in convallis interdum, ipsum nulla maximus neque, 
        ut tempus urna dui venenatis erat.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className="accordion_head">What are some of the top-notch safety measures in Wewoo?</Accordion.Header>
        <Accordion.Body>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className="accordion_head">Why choose Wewoo Premium Membership plan?</Accordion.Header>
        <Accordion.Body>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header className="accordion_head">Why choose Wewoo Premium Membership plan?</Accordion.Header>
        <Accordion.Body>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default HomeAccoidion;


