import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleClear = () => {
        setEmail("")
        setPassword("")
    }

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", {email, password});

            localStorage.setItem("token", response.data.token)
            alert("Login Successfully")
            navigate("/profile")

        } catch (error){
            alert("Invalid email or password");
        }
    };

    return (
        <div>
            <h2>Welcome Back</h2>
            <p>Login to your Account</p>

            <label>Email : </label>
            <input type="text" value={email} placeholder="Enter Your Email" onChange={(e)=> setEmail(e.target.value)}/>

            <label>Password : </label>
            <input type="password" value={password} placeholder="Enter Your Password" onChange={(e)=> setPassword(e.target.value)}/>

            <button onClick={handleLogin}>Login</button>
            <button onClick={handleClear}>Clear</button>

            <p>Don't have a account ? </p>
            <Link to="/register">Register</Link>

        </div>
    )

}

export default Login