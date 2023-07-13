import RequestsTable from "./AdminRequestComponents/RequestsTable";
import NavigationBar from "./AdminToolComponents/NavigationBar";

function AdminRequestsPage() {
    return (
        <div>
            <NavigationBar />
            <RequestsTable />
        </div>
    )
}

export default AdminRequestsPage;