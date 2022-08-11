import Nav from "../components/Nav.js";
import Content from "../components/Content.js";
import Footer from "../components/Footer.js"
const Home = () => {
    return ( 
        <div className="w-100 px-3 inline">
            <div className="w-100"><Nav/></div><br/><br/>
            <div className="w-100"><Content/></div>   
            <div className="w-100"><Footer/></div>  
        </div>
     );
}
 
export default Home;