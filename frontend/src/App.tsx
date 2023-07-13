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

function App() {
  return (
    <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/admin/register-user" element={<AdminRegisterUserPage />} />
              <Route path="/admin/users" element={<AdminListUsersPage />} />
              <Route path="/admin/view-off" element={<AdminViewDaysPage />} />
              <Route path="user/view-off" element={<ViewDaysOff />} />
              <Route path="user/add-off-days" element={<UserAddOffDay />} />
              <Route path="user/view-profile" element={<ViewProfile />} />
              <Route path="user/edit-profile" element={<ViewProfile />} />
            </Routes>
    </BrowserRouter>
  );
}

export default App;
