import { useState } from "react";

const Buttons = () => {
    let {open,setOpen}=useState(false);
    return ( 
        <button onClick={()=>setOpen(!open)} className="absolute text-3xl md:hidden top-6 cursor-pointer right-8">
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </button>
     );
}
 
export default Buttons;