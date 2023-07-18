import AdminSideBar from "./AdminNavigation/AdminSideBar";
import RegisterationForm from "./AdminToolComponents/RegisterationForm";
import "./AdminPages.css"

function AdminRegisterUserPage() {
    return (
      <div className="page__holder">
          <AdminSideBar />
          <RegisterationForm />
      </div>
    );
  }
  
  export default AdminRegisterUserPage;
  