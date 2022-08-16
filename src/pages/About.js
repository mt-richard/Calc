import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";
const About = () => {
    return ( 
        <div className="w-100 px-3 inline">
            <div className="w-100"><Nav/></div><br/><br/>
                    <div className="about py-10 px-40 md:px-20 sm:px-10">
                        <h2 className="text-3xl text-center text-white uppercase  py-10">Who We Are !!!</h2>
                        
                        <div className="para text-white">
                                <p className="py-2 ">Welcome to Calc.net, your number one source for all things about Mathematical Operations. We're dedicated to giving you the very best of Operations, with a focus on three characteristics, ie: dependability, customer service and uniqueness.
                                </p><p>Founded in 2022 by Richard,  has come a long way from its beginnings in a Kigali, ie: IPRC Kigali. When [store founder] first started out, his/her passion for [passion of founder, ie: helping other parents be more eco-friendly, providing the best equipment for his fellow mathematicians] drove him to action, ie: do intense research, quit his day job, and gave him the impetus to turn hard work and inspiration into to a booming web app. We now serve customers all over all places, and are thrilled to be a part of the adjective, ie: quirky, eco-friendly.
                                </p><br/>
                                <p className="py-2 ">We hope you enjoy our product as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
                                <br/><p className="py-2 ">Sincerely,</p>
                                <p className="py-2 ">Richard MT</p>
                        </div>

                    </div>
            <div className="w-100"><Footer/></div>  
        </div>
     );
}
 
export default About;