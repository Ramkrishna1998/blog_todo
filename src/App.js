import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/Auth/auth';
import PageNotFound from './components/Auth/pageNotFound';
import TodoComponent from './components/ListComponent/index';
import LoginPage from './components/Auth/LoginPage/loginPage'
//import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Routes>        
    <Route exact path="/" element={<LoginPage />} />        
    <Route element={<ProtectedRoute />}>
      <Route path="/dashboard" element={<TodoComponent/>} />         
    </Route>
    <Route path='*' element={<PageNotFound />} />
  </Routes>
  );
}

export default App;
