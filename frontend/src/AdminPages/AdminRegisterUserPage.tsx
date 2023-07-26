import RegisterationForm from "./AdminToolComponents/RegisterationForm";
import "./AdminPages.css"
import SideBar from "./AdminNavigation/SideBar";

function AdminRegisterUserPage() {
    return (
      <div className="page__holder">
          <SideBar />
          <RegisterationForm />
      </div>
    );
  }
  
  export default AdminRegisterUserPage;
  