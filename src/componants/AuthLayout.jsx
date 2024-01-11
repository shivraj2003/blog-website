import React from 'react'
import { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function AuthLayout({children,authentication=true}) {

    const navigate=useNavigate()
    const [loader,setLoader]=useState(true)


   const userStatus=useSelector(state=>state.auth.status)

    useEffect(()=>{
        if(authentication && userStatus !== authentication){
            navigate("/")
        } else if(!authentication && userStatus !== authentication){
            navigate("/login")
        }
        setLoader(false)
    },[userStatus,authentication,navigate])
 return loader ? <h1>Loading...</h1> : <>{children}</>
}

