
import './App.css'
import { useState,useEffect } from 'react'
import { Header,Footer } from './componants/index'
import  auth  from './service/auth'
import {useDispatch} from 'react-redux'
import { login } from './store/authSlice.js'
import { logout } from './store/authSlice.js'
import { Outlet } from 'react-router-dom'



function App() {
  const [loading,setLoading] = useState(true)
const dispatch=useDispatch()

  useEffect(() => {
    
    auth.getCurrentUser().then((userData)=>{
      if(userData)
      {
        dispatch(login({userData}));
      }
      else
      {
        dispatch(logout())
      } 
    }
    ).finally(()=>setLoading(false))
    
  }, [])
  return !loading? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  </div>
  )
  :null
    
    
   
  
}

export default App
