import React from "react";
import Col from 'react-bootstrap/Col';


function CategoryItem(category){
    return(
        <React.Fragment>
            <Col lg="4" md="6" sm="12">
                <div class="image-wrap">
                    <div class="topic-wrap">
                        <div class="image-section">
                            <img src={category.Avatar} alt="" />
                        </div>
                        <h4>{category.Name}</h4>
                    </div>
                </div>
            </Col>
        </React.Fragment>
    );
}

export default CategoryItem;