import { useState } from "react";
import validation from "./validation";

const Form = ({login})=>{

  const [userData,setUserData]=useState({
    userName:"",
    Password:""
  });


  const [errors,setErrors] = useState({
    userName:"",
    Password:""
  });


  const handleInputChange =(event)=>{
    const property = event.target.name;
    const value = event.target.value;
  setUserData({...userData,[property]:value}); 
  validation ({...userData,[property]:value}, errors, setErrors);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };


  return(
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="useName">Username</label>
            <input type="text" 
                   name="userName" 
                   value={userData.userName}
                   onChange={handleInputChange} 
            />
            <p>{errors.userName}</p>
        </div>

        <div>
            <label htmlFor="Password">Password</label>
            <input type="text" 
                   name="Password" 
                   value={userData.Password}
                   onChange={handleInputChange}  
            />
        </div>

        <button>LOGIN</button>
        
    </form>
 )
}

export default Form;