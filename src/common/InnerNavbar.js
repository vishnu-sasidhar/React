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
        </React.Fragment>
    );
}
export default InnerNavbar;