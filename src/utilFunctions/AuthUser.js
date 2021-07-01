import { useEffect } from "react";

export default function AuthUser({setUser}) {

	useEffect(()=>{
        if (localStorage.getItem("user")) {
            const user = localStorage.getItem("user");
            setUser(JSON.parse(user));
        }
    }, [])

    return null
}
