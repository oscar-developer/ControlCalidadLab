
import { Container } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const navArrayLinks =[
  {
      title:"Home",
      path:"control-calidad-lab/",
      icon: <HomeIcon/>
  },
  {
      title:"Login",
      path:"login",
      icon: <LoginIcon/>
  },
  {
      title:"Register",
      path:"control-calidad-lab/register",
      icon: <VpnKeyIcon/>
  },    
]

export default function App() {
  
  return (
    <>
        <Navbar navArrayLinks ={navArrayLinks}/>
        <Container sx={{mt: 5}}>
          <Routes>
            <Route path ="/" element={<Home/>}/>
            <Route path ="/control-calidad-lab/" element={<Home/>}/>
            
            <Route path ="/login" element={<Login/>}/>
            <Route path ="/control-calidad-lab/register" element={<Register/>}/>
          </Routes>          
        </Container>
    </>
    
  );
}
