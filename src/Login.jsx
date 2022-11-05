function Login() {
    // const [errorMessages, setErrorMessages] = useState({});
    // const [isSubmitted, setIsSubmitted] = useState(false);
    
    return (
<div>
  <div className=" h-auto w-full" >

   <div className="flex justify-center items-center ">
  
   <div  className="p-6 mt-60 justify-center rounded-xl  shadow-sm border-2  border-red-500  bg-white  w-96   ">
     <form>
     <h2 className="text-blue-700  text-center text-3xl font-bold">Login</h2>

       <div className="input-container">
         <label>Email </label>
         <input type="email"  className="h-8 w-full rounded-md border border-slate-300 text-sm bg-transparent  shadow-sm " required />
      
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password"  className="h-8 w-full rounded-md border border-slate-300 text-sm bg-transparent  shadow-sm " required />
         {/* {renderErrorMessage("pass")} */}
       </div>
       <div className="button-container">
         <input type="submit" className="mt-5 h-10 w-full  cursor-pointer text-white rounded-md  bg-red-500 hover:bg-blue-600  " />
       </div>
     </form>
   </div>


      {/* <div className='Login'>
        <p >it is login page</p>
      </div> */}
</div>
</div>
         </div>
 
    )
  }
  
  export default Login