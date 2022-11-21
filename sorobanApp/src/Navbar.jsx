
import timeer from "./image/timeer.png"
import logoo from "./image/lg.png"
const NavBar =()=>{
    return(
        <div>
             <div className="bg-zinc-50 drop-shadw-2xl"> 
     <div className="flex place-content-between  p-4  ">  
                     <div className="flex"> 
        <img className="w-8 h-8" src={timeer} alt="" /> 
        <h2 className="text-red-400 mt-2 ml-2">Tic-Tac</h2>      
                      </div>
       
       <img className="w-8 h-8" src="https://img.icons8.com/ios-glyphs/60/null/menu-rounded.png"/>

             </div> 
             </div>



           <div className="flex place-content-center"> <img className="w-64 h-40 " src={logoo} alt="" /></div>

 

        </div>
    )
    
}
export default NavBar;