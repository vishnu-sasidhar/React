import React from "react";



function NormalInput(InputType){
    return(
        <input
          type={InputType.type} 
          placeholder={InputType.placeholder}
          value={InputType.value}
          className="cntct_input"
      />
    );
}

function NormalTextarea(textarea){
  return(
    <textarea 
    placeholder={textarea.placeholder} 
    class="cntct_input">

    </textarea>
  )
}



export { NormalInput, NormalTextarea };