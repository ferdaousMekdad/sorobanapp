import contcss from './content.css'

const Content =()=>{
    return(
  <div className="concss">
            
            <div className="flex place-content-between m-16 "> 

            <div className="rounded    w-72 h-48 border-solid backdrop-blur-md hover:shadow-2xl  border border-slate-300 ">

            <h1 className="text-2xl mt-4 text-center">select the number of operatin</h1>
            <input className="p-2 rounded hover:shadow-2xl ml-12 mr-8 mt-8" type="number" placeholder="enter a number" />

            </div>
            <div className="rounded   w-72 h-48 border-solid backdrop-blur-md hover:shadow-2xl  border border-slate-300 ">

            <h1 className="text-2xl mt-4 text-center">select the parties of the process</h1>
            <input className="p-2 rounded ml-12 hover:shadow-2xl mr-8 mt-8" type="number"  placeholder="enter a number"/>

          </div>
          <div className=" w-72 h-48   rounded border-solid backdrop-blur-xl border border-slate-300 hover:shadow-2xl">

            <h1 className="text-2xl  text-center mt-4">select  the time of the operatin</h1>
            <input className="p-2 hover:shadow-2xl rounded ml-12 mr-8 mt-8" type="number" placeholder="enter a number" />
          </div>

            </div>
            <div className="flex place-content-center ">
            <button className=" text-white w-36 h-12 mb-32 bg-pink-300 hover:bg-pink-400 text-center p-2 rounded ml-12 mr-8 mt-4 text-2xl border-solid ">Let Start </button>
            </div>
         
         

        </div>
)}

export default Content ;