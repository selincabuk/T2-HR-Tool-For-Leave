import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import AdminListUsersPage from './AdminPages/AdminListUsersPage';
import Login from './Login';
import AdminRegisterUserPage from './AdminPages/AdminRegisterUserPage';
import AdminViewDaysPage from './AdminPages/AdminViewDaysPage';

function App() {
  return (
    <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/admin/register-user" element={<AdminRegisterUserPage />} />
              <Route path="/admin/users" element={<AdminListUsersPage />} />
              <Route path="/admin/view-off" element={<AdminViewDaysPage />} />
            </Routes>
    </BrowserRouter>
  );
}

export default App;
