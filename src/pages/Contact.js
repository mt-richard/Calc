import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";

const Contact = () => {
    return ( 
        <div className="w-100 px-3 inline">
        <div className="w-100"><Nav/></div><br/><br/>
        <div className="w-100 contact">
            <div className="cont w-100 text-center">
                <h2 className="text-3xl py-10 block uppercase tracking-wide text-white font-bold mb-2 ">Get in touch</h2>
                <div className="all md:flex w-100">
                    <div className="text-center  w-100">
                        <h2 className="head2 font-bold text-3xl px-10 py-20 md:m-10 text-white text-center">How can we help you ?</h2>
                    </div>
                    <div className="form w-100 ml-20 md:m-10">
                        <form>
                            <input className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Enter Your Name"/>
                            <input className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Enter Your Email Address"/>
                            <textarea  className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-40" placeholder="Enter Your Message"/>  
                            <input className="block w-35 bg-green-600  font-bold  text-white border border-none rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 pointer hover:bg-white hover:text-green-600" type="submit" value="Send Message" />
                        </form>
                    </div>
                </div>
            </div>
        </div>   
        <div className="w-100"><Footer/></div>  
    </div>
     );
}
 
export default Contact;