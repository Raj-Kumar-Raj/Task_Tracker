import { Route, Routes } from 'react-router-dom';
import Home from './home';
import UserLogin from './Login/userLogin';
import AdminLogin from './Login/login';
import Dashboard from './userdashboard';
import Dashboard1 from './dashboard';
import EmployeeForm from './employeeForm';
import Signup from './SignUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login/user" element={<UserLogin />} />
      <Route path="/login/admin" element={<AdminLogin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard1" element={<Dashboard1 />} />
      <Route path="/create-employee" element={<EmployeeForm />} />
      <Route path="/signup" element={<Signup />} />

    </Routes>
  );
}

export default App;
