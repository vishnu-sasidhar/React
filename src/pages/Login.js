import React from 'react'
import InnerNavbar from '../common/InnerNavbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { SelectField, RadioField, FormEmail, FormPassword, FormCheck } from '../common/Form'

function LoginPage(){
 return(
    <React.Fragment>
        <InnerNavbar/>
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
                                    className="mb-3"
                                    justify >
                            <Tab eventKey="RegisterTab" title="Register">
                                <div class="login_form">
                                    <form>
                                      <div class="row">
                                        <div class="col-lg-12">
                                            <SelectField/>  
                                        </div>
                 
                      <div class="col-lg-12">
                      <label className="label-text label-text-2">I'm looking for</label>
                      <RadioField/>
                    </div>
                    <div class="col-lg-12">
                      <FormEmail/>
                    </div>
                    <div class="col-lg-12">
                        <FormPassword placeholder="Create Your Password" />
                        <FormPassword placeholder="Confirm Password"/>
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
    <div class="login_form">
                   <form>
                    <FormEmail/>
                    <FormPassword placeholder="Password" />
                    <div class="defauit_wrap">
                        <label class="stay_logged_in">
                        <FormCheck/>
                            <p>Stay logged in</p></label>
                        <a href="" class="forgot_password">Forgotten password?</a>
                    </div>
                    <div class="login_btn_wrap">
                        <button class="login_btn">log in</button>
                    </div>
                   </form>
               </div>                         
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


export default LoginPage;