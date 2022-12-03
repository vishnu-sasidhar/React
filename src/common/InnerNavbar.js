import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assets/images/logo.svg'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



function InnerNavbar(){
    return(
        <React.Fragment>
         <div class="common_head">
            <Container>
                <div class="top_logo_wrap">
                    <img src={logo} alt=""/>
                </div>
            </Container>
        </div>

        <div id="login_page_wrapper">
            <Container>
                <div class="login_wrap">
                    <div class="login_wrapper">
                        <Row>
                            <Col lg="5" md="5" sm="12">
                                <div class="lft_wrapper">
                                    <div>
                                        <h2>start free today</h2>
                                    <p>start meeting new people in your area!</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="7" md="7" sm="12">
                                <div class="rht_wrapper">
                                    <div class="login_form_wrap">
                                    <Tabs
                                        defaultActiveKey="RegisterTab"
                                        id="justify-tab-example"
                                        
                                        justify >
                                        <Tab eventKey="RegisterTab" title="Register">
                                        <div class="login_form">
                   <form>
                                      <div class="row">
                                        <div class="col-lg-12">
                    <label class="label-text label-text-2">I am</label>
                     <select id="gender" class="fill-input inpt_field" name="user_state">
                         <option value="" disabled="disabled" selected="selected">Select</option>
                         <option value="AL">Male</option>
                         <option value="AK">Female</option>
                         <option value="AK">Others</option>
                    </select>   
                    </div>
                 
                      <div class="col-lg-12">
                      <label class="label-text label-text-2">I'm looking for</label>
                      <label class="check-box inpt_field" for="rdo1">
                          <div>
                            <div class="icon_img">
                              <img src="images/friends.png" alt="" />
                            </div>
                            <div class="redio_btn">
                                Find a Friend
                            </div>
                         </div>
                      </label>
                      <label class="check-box check-box-2 inpt_field" for="rdo2">
                          <div>
                            <div class="icon_img">
                              <img src="images/lover.png" alt="" />
                            </div>
                            <div class="redio_btn">
                                Find a Partner
                            </div>
                         </div>
                      </label>
                      <label class="check-box check-box-2 inpt_field" for="rdo3">
                          <div>
                            <div class="icon_img">
                              <img src="images/travel.png" alt="" />
                            </div>
                            <div class="redio_btn">
                                Travel Buddy
                            </div>
                         </div>
                      </label>
                    </div>
                    <div class="col-lg-12">
                    <label class="label-text label-text-2">I’m looking for</label>
                     <select id="gender" class="fill-input inpt_field" name="user_state">
                         <option value="" disabled="disabled" selected="selected">Select</option>
                         <option value="AL">Find a Friend</option>
                         <option value="AK">Life Partner</option>
                         <option value="AK">Travel Buddy</option>
                    </select>   
                    </div>
                    <div class="col-lg-12">
                      <div class="fill-input inpt_field">
                        <iconify-icon icon="clarity:email-solid"></iconify-icon>
                        <input type="email" placeholder="Enter E-mail"/>
                      </div>
                    </div>
                    <div class="col-lg-12">
                    <div class="fill-input inpt_field">
                      <iconify-icon icon="ri:lock-password-fill"></iconify-icon>
                        <input type="password" placeholder="Create Your Password"/>
                      </div>
                      <div class="fill-input inpt_field">
                      <iconify-icon icon="ri:lock-password-fill"></iconify-icon>
                        <input type="password" placeholder="confirm Password"/>
                      </div>
                      <div class="login_btn_wrap">
                     <input type="submit" value="create account" class="login_btn just_hide"/>
                      <a href="add_detail_page.html" class="login_btn link_btn">create account</a>
                  
                 </div>
                    </div>
                  </div>
                   </form>
               </div>
                                        </Tab>
                                        <Tab eventKey="LoginTab" title="Login">
                                      
                                        </Tab>
                                       
                                    </Tabs>
        
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>




        </React.Fragment>
    );
}
export default InnerNavbar;