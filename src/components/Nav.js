import { useState } from "react";

const Nav = () => {

    let links =[
        {name:"Home",link:"/"},
        {name:"About Us",link:"/"},
        {name:"Contact",link:"/"}
        
    ];
    let [open,setOpen]=useState(false);
    return ( 
        <div className="nav shadow-md  w-full fixed top-0 left-0">
            <div className="md:flex  items-center justify-between text-white py-4 px-10">
                <div className="logo cursor-pointer">
                    <span className="text-3xl px-2 py-7">calc<span className="text-green-400">.net</span></span>
                </div>

                        <div onClick={()=>setOpen(!open)} className="absolute text-3xl md:hidden top-6 cursor-pointer right-8">
                        <ion-icon name={open ? 'close':'menu'}></ion-icon>
                        </div>
                        
                    <ul className={`md:flex md:items-center px-12 md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0  w-full md:w-auto ${open ? 'top-20 opacity-100 bg-gray-600':'top-[-490px] opacity-100 '}`}>
                        { links.map((e) =>(
                            <li key ={e.name} className="md:my-0 my-3 md:ml-12 hover:text-green-400">
                            <a className="" href="{e.link}">{e.name}</a>
                            </li>
                            ))
                        }
                    </ul>
                        
            </div>
        </div>
     );
}
 
export default Nav;