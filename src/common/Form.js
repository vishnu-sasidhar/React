import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import friend from "../assets/images/friends.png"
import travel from "../assets/images/travel.png"
import lover from "../assets/images/lover.png"
import { Icon } from '@iconify/react';




function SelectField(props) {
  return (
    <React.Fragment>
      <Form.Group>
        <Form.Label className='label-text'>I am</Form.Label>
        <Form.Select className='fill-input'>
          <option>Select</option>
          <option>Male</option>
          <option>Female</option>
          <option>Others</option>
        </Form.Select>
      </Form.Group>
    </React.Fragment>
  );
}


function RadioField(props) {
  return (
    <React.Fragment>
      {["radio"].map((type) => (
        <div key={`inline-${type}`} className=''>
          <div className='check-box'>
            <div>
              <div className='icon_img'>
                <img src={friend} alt='' />
              </div>
              <Form.Check
                inline
                label='Find a Friend'
                name='group1'
                type={type}
                id={`inline-${type}-1`}
              />
            </div>
          </div>
          <div className='check-box check-box-2'>
            <div>
              <div className='icon_img'>
                <img src={lover} alt='' />
              </div>
              <Form.Check
                inline
                label='Life Partner'
                name='group1'
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          </div>
          <div className='check-box check-box-2'>
            <div>
              <div className='icon_img'>
                <img src={travel} alt='' />
              </div>
              <Form.Check
                inline
                label='Travel Buddy'
                name='group1'
                type={type}
                id={`inline-${type}-3`}
              />
            </div>
          </div>
          
        </div>
      ))}
    </React.Fragment>
  );
}
function FormEmail(){
  return(
    <React.Fragment>
    <div class="fill-input">
      <iconify-icon icon="clarity:email-solid"></iconify-icon>
      <InputGroup>
        <Form.Control
          type="email"
          placeholder="Enter E-mail"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
    </InputGroup>
    </div>
    </React.Fragment>

  );
}
  
function FormPassword(){
  return(
    <React.Fragment>
      <div class="fill-input">
          <iconify-icon icon="ri:lock-password-fill"></iconify-icon>
          <InputGroup>
        <Form.Control
          type="password"
          placeholder="Create Your Password"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
    </InputGroup>
      </div>
    </React.Fragment>
  );
}


export { SelectField, RadioField, FormEmail, FormPassword } ;