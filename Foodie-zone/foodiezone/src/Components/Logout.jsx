import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout({ loggedout }) {
    const navigate = useNavigate();

    function logout() {

        loggedout();
        navigate('/signin')
        alert("Want to Logout? Click below!!!")
        localStorage.removeItem("isLogin");
        //  localStorage.removeItem("userList");
    }
    return (
        <>

            <button onClick={logout} style={{ textAlign: "center", marginTop: "25rem", marginLeft: "15rem",cursor:"pointer" }} >Logout</button>
        </>
    )
}

export default Logout