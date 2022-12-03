import React from "react";

import Container from 'react-bootstrap/Container';

function CommonHeader(item){
    return(
        <React.Fragment>
            <section id="common_header">
                <div class="common_caption">
                    <Container>
                        <h2 class="common_caption_head">{item.Name}</h2>
                        <p>{item.Value}</p>
                    </Container>
                </div>
            </section>
        </React.Fragment>
    );
}

export default CommonHeader;