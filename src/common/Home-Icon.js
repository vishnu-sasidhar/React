import React from "react";



function IconList(propers){
    return(
        <React.Fragment>
            <li>
                <div class="icon-wrap01">
                    <img src={propers.img} alt=""/>
                </div>
                <div class="point-wrap">
                    <h4>{propers.Name}</h4>
                    <p>{propers.value}</p>
                </div>
            </li>
        </React.Fragment>
    );
}

export default IconList;