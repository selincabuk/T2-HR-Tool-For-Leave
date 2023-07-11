import NavigationBar from "./AdminToolComponents/NavigationBar";
import "./AdminPages.css";
import ListUsersTable from "./AdminToolComponents/ListUsersTable";
function AdminListUsersPage() {
    return (
      <div>
        <NavigationBar />
        <div className="tableDiv">
          <ListUsersTable />
        </div>
        
      </div>
          
    );
  }
  
  export default AdminListUsersPage;
  