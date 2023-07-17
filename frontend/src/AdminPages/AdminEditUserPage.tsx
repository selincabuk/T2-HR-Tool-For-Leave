import EditUserForm from "./AdminEditUserComponents/EditUserForm";
import { Routes, Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AdminSideBar from "./AdminNavigation/AdminSideBar";

interface User {
    id: number,
    fname: string,
    lname: string,
    email: string,
    gender: string,
    birthday: string,  
    pwd: string,
}
function AdminEditUserPage() {
    // fetch user id from the url:
    let params = useParams();
    let uid = params.userId;

    // states for fetching:
    const [user, setUser] = useState<User>({ id: 0, fname: "", lname: "", email: "", gender: "", birthday: "", pwd: ""});
    const [error, setError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // fetch the user with uid from the database:
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch('http://localhost:3001/admin/edit/' + uid);
                if (!response.ok) {
                    console.log("hataaaaaa")
                }
                const data = await response.json();
                setUser(data);
                console.log(data);
                setIsLoading(false)
                setError(false)
            } catch (error) {
                setError(true)
                setIsLoading(false)
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <AdminSideBar />
            
        </div>
    )
}

//<EditUserForm user={user} />

export default AdminEditUserPage;