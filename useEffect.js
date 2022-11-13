import React from "react";
import "./style.css";

const UseEffect = ()=>{   
  // const initialData = 15;
  const [myNum, setMyNum] = React.useState(0);

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={() => setMyNum(myNum +1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
         
        </div>
      </div>
    </>
  );
};

export default UseEffect;