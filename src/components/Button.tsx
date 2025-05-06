import { useState } from "react";
import Alert from "./Alert";

interface props {
  buttonClassName: string[];
}

function Button({ buttonClassName }: props) {

    const [alertVisible, setAlertVisiility] = useState(false);

  return (
    <>
        {alertVisible && <Alert/>}
        
       <div className="mt-4">
            {buttonClassName.map((buttonClass) => (
                <button type="button" key={buttonClass} className={"btn me-2 btn-" + buttonClass} onClick={()=>{
                    console.log('hello');
                    setAlertVisiility(true);
                }}>
                    {buttonClass}
                </button>
            ))}
       </div>
    </>
  );
}

export default Button;
