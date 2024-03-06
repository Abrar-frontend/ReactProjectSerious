import { Header , Btnbar} from "./component";
import { Outlet } from "react-router-dom";

import authService from "./Appwrite/Auth";

import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";


function App() {
  const [loading , setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
  authService.getCurrentUser()
  .then((userData) => {
    if(userData){
      dispatch(login({userData}))
    }else{
      dispatch(logout())
    }
  })
  .finally(() => setLoading(false))
  },[])

// console.log(import.meta.env.React_APP_APPWIRTE_URL) that I left because most developer make mistake in there this line is use in Create_React_App And I am using Vite then we use following command

// console.log(import.meta.env.VITE_APP_APPWIRTE_URL)

  return !loading ? (
 
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Btnbar />
     
      </div>
    </div>
  )  : null
}

export default App
