import FilterComponent from "./AdminRequestComponents/FilterComponent";
import RequestsTable from "./AdminRequestComponents/RequestsTable";
import NavigationBar from "./AdminToolComponents/NavigationBar";
import { useEffect, useState } from "react";

function AdminRequestsPage() {
    type Request = {
        id: number,
        fname: string,
        lname: string,
        email: string,
        startDate: string,
        endDate: string,
        reason: string,
        status: string
    }

    type requestArray = Request[];

    // state to fetch requests:
    const [requests, setRequests] = useState<requestArray>([]);
    // state if fetching fails:
    const [error, setError] = useState<boolean>(false);
    // to show loading animation:
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch('http://localhost:3001/admin/get-requests');
                if (!response.ok) {
                    console.log("hataaaaaa")
                }
                const data = await response.json();
                setRequests(data);
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
            <NavigationBar />
            <FilterComponent />
            <RequestsTable requests={requests}/>
        </div>
    )
}

export default AdminRequestsPage;