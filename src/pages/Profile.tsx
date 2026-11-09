import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

interface User {
    name: string;
    email: string;
}

const Profile = () => {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    useEffect(() => {

        const getProfile = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                navigate("/login");
                return;
            }

            try {
                const response = await axios.get(
                    "http://localhost:5000/api/auth/profile",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                setUser(response.data.data);

            } catch (error) {
                localStorage.removeItem("token");
                navigate("/login");
            }
        };

        getProfile();

    }, [navigate]);

    const handleLogOut = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div>
            <h1>User Profile</h1>

            <p>Hello Guest</p>

            <button onClick={handleLogOut}>LogOut</button>
        </div>
    );
};

export default Profile;
