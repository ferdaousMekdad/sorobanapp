
import NavBar from "./Navbar";
import Content from "./Content";
import app from "./app.css"
import Home from "./pages/home/home";

const App =()=>{
    return(
        <div >
         <div className="home"> 
           <NavBar/> 
            <Content/>          

         </div>
            
       
        </div>
        
    )
}
export default App;
