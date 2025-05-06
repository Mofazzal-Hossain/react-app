import { useState } from "react";
import Alert from "./Alert";

interface props {
  buttonClassName: string[];
}

function Button({ buttonClassName }: props) {

    const [alertVisible, setAlertVisiility] = useState(false);
    const [getButtonText, setButtonText] = useState('');

  return (
    <>
        {alertVisible && <Alert alertClose={()=>setAlertVisiility(false)} buttonText={getButtonText}/>}
        
       <div className="mt-4">
            {buttonClassName.map((buttonClass) => (
                <button type="button" key={buttonClass} className={"btn me-2 btn-" + buttonClass} onClick={()=>{
                    setAlertVisiility(true);
                    setButtonText(buttonClass);
                }}>
                    {buttonClass}
                </button>
            ))}
       </div>
    </>
  );
}

export default Button;
