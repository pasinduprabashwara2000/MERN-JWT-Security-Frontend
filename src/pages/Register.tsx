import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

export const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleClear = () => {
        setName("")
        setEmail("")
        setPassword("")
    }

    const handleRegister = async () => {

        try {

            if(!name || !email || !password){
                alert("All fields are Required")
                return
            }

            await axios.post("http://localhost:5000/api/auth/register", {name, email, password});
            alert("Registration Successfully")
            navigate("/login")
        } catch (error) {
            alert("Registration Failed")
        }
    }

    return(
            <div>

                <h2>Create Account</h2>
                <p>Register to get Start</p>

                <label>Name : </label>
                <input type="text" value={name} placeholder="Enter Your Name" onChange={(e)=> setName(e.target.value)}/>

                <label>Email : </label>
                <input type="email" value={email} placeholder="Enter Your Email" onChange={(e)=> setEmail(e.target.value)}/>

                <label>Password : </label>
                <input type="password" value={password} placeholder="Enter Your Password" onChange={(e)=> setPassword(e.target.value)}/>

                <button onClick={handleRegister}>Register</button>
                <button onClick={handleClear}>Clear</button>

                <p>Already Have a Account ?</p>
                <Link to="/login">Login</Link>

            </div>
    )

}