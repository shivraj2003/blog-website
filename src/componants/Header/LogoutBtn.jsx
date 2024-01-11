import {useDispatch} from 'react-redux'
import auth from  '../../service/auth'
import { logout  }from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const handleLogout=()=>{

        auth.logout().then(()=>
        {dispatch(logout())
         }
        )

        }


  return (
    <div className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-ful' 
     onClick={handleLogout}>LogoutBtn</div>
  )
}

export default LogoutBtn






