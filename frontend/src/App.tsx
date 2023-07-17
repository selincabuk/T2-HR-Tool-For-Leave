import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import AdminListUsersPage from './AdminPages/AdminListUsersPage';
import Login from './Login';
import AdminRegisterUserPage from './AdminPages/AdminRegisterUserPage';
import AdminViewDaysPage from './AdminPages/AdminViewDaysPage';
import ViewDaysOff from "./UserPages/ViewOffDays";
import ViewProfile from "./UserPages/ViewProfile";
import UserAddOffDay from "./UserPages/UserAddOffDay";
import EditProfile from "./UserPages/EditProfile";
import AdminRequestsPage from "./AdminPages/AdminRequestsPage";
import AdminEditUserPage from "./AdminPages/AdminEditUserPage";

function App() {
  return (
    <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/admin" element={<AdminRequestsPage />} />
              <Route path="/admin/register-user" element={<AdminRegisterUserPage />} />
              <Route path="/admin/users" element={<AdminListUsersPage />} />
              <Route path="/admin/view-off" element={<AdminViewDaysPage />} />
              <Route path="user/view-off" element={<ViewDaysOff />} />
              <Route path="user/add-off-days" element={<UserAddOffDay />} />
              <Route path="user/view-profile" element={<ViewProfile />} />
              <Route path="user/edit-profile" element={<EditProfile />} />
              <Route path="admin/edit/:userId" element={<AdminEditUserPage />} />
            </Routes>
    </BrowserRouter>
  );
}

export default App;
